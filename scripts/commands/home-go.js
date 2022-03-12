import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('ev-git')
.setAliases(['e-g'])
.setDescription('evine yollar')
.setUsage(['ev-git', 'e-g'])
.setCancelMessage(true)
.setPrivate(false)  
CommandHandler.register(registration, (interaction) => {
    var player = interaction.player;
    var homeCoords = false;
    player.getTags().forEach(tag => {
      if (tag.includes("home: ")) {
        homeCoords = tag.replace("home: ", "");
      }
    })
    if (!homeCoords) {
      world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§4Bir evin yok, ilk önce bir ev oluştur >> t/ev-ayarla"}]}`);
    } else {
      world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§2Evine ışınlandın! konum >> ${homeCoords}"}]}`);
      world.getDimension("overworld").runCommand(`tp "${player.nameTag}" ${homeCoords}`);
    }
})