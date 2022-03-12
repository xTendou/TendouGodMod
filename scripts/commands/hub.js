import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('hub')
.setAliases(['h'])
.setDescription('lobiye yollar')
.setUsage(['hub', 'h'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
  try {
  	world.getDimension("overworld").runCommand(`tp "${interaction.player.nameTag}" @e[type=tgm:hub]`)
    world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§2Lobiye ışınlandın!"}]}`)

  }
 catch(e) {
    world.getDimension("overworld").runCommand(`say ${e} ${e.stack}`)
  }
  })
