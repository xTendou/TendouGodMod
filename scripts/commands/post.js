import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('para-gönder')
.setAliases(['g'])
.setDescription('Başka bir oyuncuya para yollar')
.setUsage(['gönder', 'g'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('inputt').setType('string').setDescription('sj')
})
CommandHandler.register(registration, (interaction) => {
   try{
        let inputcmd = interaction.command.getInput('inputt')?.getValue()
        let inputsp = inputcmd.split("-")
        let input1 = inputsp[0]
        let input2 = inputsp[1]
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${input2}..}] add varpara`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${input2}`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ execute @s[tag=varpara] ~~~ scoreboard players add @p[tag="${input1}"] para ${input2}`)
        world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2${input1} kişisine ${input2} miktarda para yollandı!"}]}`) 
        world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara`)
        }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4Bir hata oluştu\n olabilcek hatalar: \nGirilen isim de bir oyuncu yok\nYeterli paran yok"}]}`)                                                    
        
  }
})