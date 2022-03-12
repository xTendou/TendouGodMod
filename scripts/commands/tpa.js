import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('tpa')
.setAliases(['t'])
.setDescription('Başka bir oyuncuya ışınlar')
.setUsage(['tpa', 'tpa <Oyuncu ismi>'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('nickname').setType('string').setDescription('gitmek iistediğin oyuncu')
})
CommandHandler.register(registration, (interaction) => {
    try {
        const input1 = interaction.command.getInput('nickname')?.getValue()
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tp @s @p[tag="${input1}"]`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2İstediğin yere hemen yolluyorum!"}]}`)                                                     
        }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4Böyle bir oyuncu yok!"}]}`)                                                
       
  }
})