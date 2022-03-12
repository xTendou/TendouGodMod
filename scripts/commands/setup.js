import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('setup')
.setAliases(['s'])
.setDescription('yardım sayfasına eriş')
.setUsage(['yardım', 'y'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
  try {
    world.getDimension("overworld").runCommand(`scoreboard objectives add para dummy`)
    world.getDimension("overworld").runCommand(`scoreboard objectives add bank dummy`)
  	
  }
 catch(e) {
    world.getDimension("overworld").runCommand(`say ${e} ${e.stack}`, World.getworld.getDimension("overworld")('overworld'))
  }
  })
