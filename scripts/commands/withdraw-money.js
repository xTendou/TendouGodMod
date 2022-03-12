import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('para-çek')
.setAliases(['pç'])
.setDescription('para çek')
.setUsage(['pç', 'pç <miktar>'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('count').setType('string').setDescription('gitmek iistediğin oyuncu')
})
CommandHandler.register(registration, (interaction) => {
    try {
        const input1 = interaction.command.getInput('count')?.getValue()
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={bank=${input1}..}] add varpara`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] bank ${input1}`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players add @s[tag=varpara] para ${input1}`)
     
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Para çekimi başarılı \nÇekilen miktar >> ${input1}"}]}`)          
        world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara`)
        }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" tellraw @s {"rawtext":[{"text":"<Server> §4Banka da yeterli paran yok"}]}`, World.getDimension("overworld"))
       
  }
})