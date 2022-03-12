import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('para-yatır')
.setAliases(['py'])
.setDescription('para yatır')
.setUsage(['py', 'py <miktar>'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('count').setType('string').setDescription('gitmek iistediğin oyuncu')
})
CommandHandler.register(registration, (interaction) => {
    try {
        const input1 = interaction.command.getInput('count')?.getValue()
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${input1}..}] add varpara` )
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${input1}` )
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players add @s[tag=varpara] bank ${input1}` )
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Para yatırımı başarılı \nYatırılan miktar >> ${input1}"}]}` )          
        world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
        }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4Yeterli paran yok!"}]}` )                                              
        
  }
})