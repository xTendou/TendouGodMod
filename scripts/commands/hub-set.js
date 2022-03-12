import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('hub-ayarla')
.setAliases(['h-a'])
.setDescription('lobi ayarlar')
.setUsage(['hub-ayarla', 'h-a'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
  try {
    const hastagstatus = interaction.player.hasTag("perm:Admin")
    if(hastagstatus == true){
  	world.getDimension("overworld").runCommand(`execute "${interaction.player.nameTag}" ~~~ summon tgm:hub ~~+2~`)
    world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§2Lobi noktası ayarlandı"}]}`)
}
 else if(hastagstatus == false){
   world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§4Yeterli yetkin yok"}]}`)
 }
  }
 catch(e) {
    world.getDimension("overworld").runCommand(`say ${e} ${e.stack}`)
  }
  })
