import { world } from "mojang-minecraft"
import { SimulatedPlayer } from "mojang-gametest"
import './classes/manager/EventEmitter.js'
import './commands/import.js'
import { customChatRanks, customNameRanks, tagSet} from "./plugins/functions.js"

world.events.beforeChat.subscribe(data => {
  if(data.message.startsWith("t/")){
    data.cancel = true
  }
  else {
        customChatRanks(data)
  }
})
world.events.beforeItemUse.subscribe(data => {
  try {
const { item, source } = data
if (item.id == "minecraft:compass" && item.data == 5){
  world.getDimension("overworld").runCommand(`tp "${data.source.nameTag}" @e[type=tgm:hub]`)
  world.getDimension("overworld").runCommand(`tellraw "${data.source.nameTag}" {"rawtext":[{"text":"§2Lobiye ışınlandın!"}]}`)
}
} catch(e){
  world.getDimension("overworld").runCommand(`tellraw "${data.source.nameTag}" {"rawtext":[{"text":"§4Belirlenmiş bir lobi yok!"}]}`)
}
})
 
function hasTag(name, tag) {
    let allTags = world.getDimension("overworld").runCommand(`tag "${name}" list`).statusMessage.match(/§a.*?§r/g)?.map(v => v.slice(2, -2))
    if (allTags == null) {
        return false
    }
    let incTag = allTags.includes(tag)
    if (incTag == true) {
        return true
    }
}
var tick = 0
world.events.tick.subscribe(data => {
  tick++
  world.getDimension("overworld").runCommand(`replaceitem entity @a slot.hotbar 8 minecraft:compass 1 5 {"minecraft:item_lock":{"mode":"lock_in_slot"}}`)
    customNameRanks(data)
    tagSet(data)
})
