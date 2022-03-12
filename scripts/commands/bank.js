import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('bank')
.setAliases(['b'])
.setDescription('Kendi parana bakarsın')
.setUsage(['bank', 'b'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
    try {
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Toplam banka da ki paran >> "},{"score":{"name":"*","objective":"bank"}}]}` )                                                     
        }
catch(e) {
   world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4bank objesi oluşturulmamış"}]}` )                                                     
       
  }
})