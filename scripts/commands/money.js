import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('para')
.setAliases(['p'])
.setDescription('Kendi parana bakarsın')
.setUsage(['para', 'p'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
    try {
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Toplam paran >> "},{"score":{"name":"*","objective":"para"}}]}`)                                                     
        }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4Para objesi oluşturulmamış!"}]}`)                                                 
        
  }
})