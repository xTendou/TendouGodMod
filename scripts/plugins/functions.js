import { world } from "mojang-minecraft"
export function getTags(target) {
    const command = world.getDimension("overworld").runCommand(`tag "${target}" list`)
    const raw = command.statusMessage.split(' ')
    const tags = []
    for (const string of raw) {
        if (!string.startsWith("rank:")) tags.push(string.replace('§a', '').replace('§r', '').replace(',', ' '))
    }
    return tags
}
export function customChatRanks(data) {
    data.cancel = true
    var message = data.message
    const sender = data.sender

    message = message.replaceAll(/(\n|\")/g, "")

    if (!message == "") {
        const tags = getTags(sender.nameTag)
        let rank
        for (const tag of tags) {
            if (tag.startsWith('rank:')) {
                rank = tag.replace('rank:', '')
                rank = rank.replaceAll('-', ' ')
            }
        }
        if (rank == undefined) rank = "§bÜye"
        world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§8[§2${rank}§8] §2${sender.name} §c>>§9 ${message}"}]}`)
    }
}

export function customNameRanks(data) {
          for (const player of world.getPlayers()) {
        const tags = getTags(player.nameTag)
        let rank
        for (const tag of tags) {
            if (tag.startsWith('rank:')) {
                rank = tag.replace('rank:', '')
                rank = rank.replaceAll("-", " ")
            }
        }
        if (rank == undefined) rank = "§bÜye"
        const phc = player.getComponent("health")
      player.nameTag = `§8[§2${rank}§8] §2${player.name}\n§4${phc.current} Can`
    }
}
export function tagSet(data){
  for (const player of world.getPlayers()) {
   if(player.hasTag(`${player.name}`) == false){
  player.runCommand(`tag @s add "${player.name}"`)
   }
}
  }

