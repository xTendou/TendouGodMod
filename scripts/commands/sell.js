import { world } from "mojang-minecraft"
import { SimulatedPlayer } from "mojang-gametest"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"
const registration = new CommandBuilder()
.setName('maden-sat')
.setAliases(['s'])
.setDescription('maden satarsın')
.setUsage(['maden-sat', 'sat'])
.setCancelMessage(true)
.setPrivate(false)
.addInput(input => {
  return input.setName('inputtt').setType('string').setDescription('sj')
});
CommandHandler.register(registration, (interaction) => {
   try{
        let inputcmd = interaction.command.getInput('inputtt')?.getValue()
        let inputsp = inputcmd.split("-")
        let input1 = inputsp[0]
        let input2 = inputsp[1]
        let rightInventoryComp = interaction.player.getComponent("minecraft:inventory")
        let rightChestContainer = rightInventoryComp.container
        let item = rightChestContainer.getItem(interaction.player.selectedSlot)
   if(item.amount >= input2){
   	     if(input1 == "elmas"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" diamond 0 ${input2} `)
          let para = 15*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     	if(input1 == "zümrüt"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" emerald 0 ${input2} `)
          let para = 10*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     	if(input1 == "altın"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" golden_ore 0 ${input2} `)
          let para = 50*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     if(input1 == "netherite"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" netherite_ingot 0 ${input2} `)
          let para = 60*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     if(input1 == "demir"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" iron_ingot 0 ${input2} `)
          let para = 25*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     	if(input1 == "kömür"){
          world.getDimension("overworld").runCommand(`clear "${interaction.player.nameTag}" coal 0 ${input2} `)
          let para = 5*input2
          world.getDimension("overworld").runCommand(`scoreboard players add "${interaction.player.nameTag}" para ${para}`)
          world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya başarıyla satıldı! \nKazanılan para >> ${para}"}]}`)
   	     }
   	     	
   	     } 
        else {
        	world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Eşya bulunamadı ve ya sayısı uygun değil!"}]}`)
        }
        
   }
catch(e) {
   world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ tellraw @s {"rawtext":[{"text":"<Server> §2Bilinmeyen bir sorun oluştu"}]}`)                                               
      
  }
})