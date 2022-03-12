import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('ev-ayarla')
.setAliases(['e-y'])
.setDescription('ev ayarlar')
.setUsage(['ev-ayarla', 'e-y'])
.setCancelMessage(true)
.setPrivate(false)    
CommandHandler.register(registration, (interaction) => {
      var player = interaction.player
      var home = interaction.player.location.x + " " + interaction.player.location.y + " " + interaction.player.location.z
      player.getTags().forEach(tag => {
        if (tag.includes("home: ")) {
          player.removeTag(tag)
        }
      })
      player.addTag(`home: ${home}`)
      world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§2Ev noktası belirlendi >> ${home}!"}]}`)
    })
