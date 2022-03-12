import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('maden-al')
.setAliases(['s'])
.setDescription('maden alırsın')
.setUsage(['maden-al', 'al'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('inputtt').setType('string').setDescription('sj')
})
CommandHandler.register(registration, (interaction) => {
   try{
        let inputcmd = interaction.command.getInput('inputtt')?.getValue()
        let inputsp = inputcmd.split("-")
        let input1 = inputsp[0]
        let input2 = inputsp[1]
        let rightInventoryComp = interaction.player.getComponent("inventory")
        let rightChestContainer = rightInventoryComp.container
        let item = rightChestContainer.getItem(8)
   	     if(input1 == "elmas"){
   	     	let para = 50*input2
   	     	world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give @s[tag=varpara] diamond ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${para}` )
          world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
   	     }
   	     	if(input1 == "zümrüt"){
   	     		let para = 40*input2
   	     		world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give @s[tag=varpara] emerald ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove para ${para}` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKayb edilen para >> ${para}"}]}` )
   	      world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
   	     }
   	     	if(input1 == "altın"){
   	     		let para = 20*input2
   	     		world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give @s[tag=varpara] golden_ore ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] ${para}` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKayb edilen para >> ${para}"}]}` )
   	      world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
   	     		
   	     	}
   	     if(input1 == "netherite"){
   	     	let para = 80*input2
   	     	world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give @s[tag=varpara] netherite_ingot ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${para}` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKayb edilen para >> ${para}"}]}` )
   	      world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
   	     }
   	     if(input1 == "demir"){
   	     	let para = 25*input2
   	     	world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give "${interaction.player.nameTag}" iron_ingot ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${para}` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKayb edilen para >> ${para}"}]}` )
          world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
 }
   	     	if(input1 == "kömür"){
   	     		let para = 10*input2
   	     		world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tag @s[scores={para=${para}..}] add varpara` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ give @s[tag=varpara] coal ${input2} ` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ scoreboard players remove @s[tag=varpara] para ${para}` )
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s[tag=varpara] {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKayb edilen para >> ${para}"}]}` )
   	      world.getDimension("overworld").runCommand(`tag "${interaction.player.nameTag}" remove varpara` )
   	     	}
   }
catch(e) {
    world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §4Yeterli paran yok!"}]}` )                                                     
       
}
	
})