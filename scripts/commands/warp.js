import { world } from 'mojang-minecraft';
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration1 = new CommandBuilder()
.setName('warp')
.setAliases(['w'])
.setDescription('Kendi parana bakarsın')
.setUsage(['bank', 'b'])
.setCancelMessage(true)
.setPrivate(false)
const registration2 = new CommandBuilder()
.setName('warp-ekle')
.setAliases(['we'])
.setDescription('Kendi parana bakarsın')
.setUsage(['bank', 'b'])
.setCancelMessage(true)
.setPrivate(false)
const registration3 = new CommandBuilder()
.setName('warp-liste')
.setAliases(['ws'])
.setDescription('Kendi parana bakarsın')
.setUsage(['bank', 'b'])
.setCancelMessage(true)
.setPrivate(false)
const registration4 = new CommandBuilder()
.setName('warp-sil')
.setAliases(['wl'])
.setDescription('Kendi parana bakarsın')
.setUsage(['bank', 'b'])
.setCancelMessage(true)
.setPrivate(false)
var commandPrefix = 't/';

world.events.beforeChat.subscribe(msg => {
    if (msg.message.substr(0, commandPrefix.length) == commandPrefix) {
        let args_ = msg.message.slice(commandPrefix.length).trim().split(' ');
        let cmd = args_.shift().toLowerCase();
        var args = args_.join('_').toLowerCase();
        let player = msg.sender.name;
        msg.cancel = true;
        if (commandPrefix.includes(cmd) && args.length <= 0){
          world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§cKomut yok" } ] }`); 
          return
        }
        try { var getPlayerTag =  world.getDimension("overworld").runCommand(`tag "${msg.sender.name}" list`).statusMessage } catch(e) {}
        try { var warpName =  world.getDimension("overworld").runCommand(`testfor @e[type=tgm:warp]`).statusMessage } catch(e) { var warpName = '§l§4Hata§4!§r'}
        let playerX = Math.trunc(msg.sender.location.x);
        let playerY = Math.trunc(msg.sender.location.y);
        let playerZ = Math.trunc(msg.sender.location.z);
        switch (cmd) {
            case 'warp-ekle':
                case 'addwarps':
                if (getPlayerTag.search("perm:Admin") != -1) {
                    if (warpName.search(args) == -1) {
                        world.getDimension("overworld").runCommand(`execute "${player}" ~ ~ ~ summon tgm:warp ${args} ~ ~400 ~` );
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§bWarp başarı ile oluşturuldu\n §aİsim §7: §e${args}§r\n §aKonum §7: §e${playerX}, ${playerY}, ${playerZ}" } ] }` );
                    } else {
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§4Hata! bu warp'ı silin >> t/warp-sil <warp ismi>${args}" } ] }` );
                    }
                } else {
                    world.getDimension("overworld").runCommand(`tellraw "${player}" {"rawtext":[{"text":"§cBu komutu kullanmak için yetkin yok"}]}` );
                }
            break;
            case 'warp':
                case 'warps':
                    if (warpName.search(args) == -1) {
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§2Warp bulunamadı" } ] }` );
                    } else {
                        world.getDimension("overworld").runCommand(`execute @e[type=tgm:warp,name=${args}] ~ ~ ~ tp "${player}" ~ ~-400 ~` );
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§aWarp §7: §5${args}" } ] }` );
                    }
            break;
            case 'warp-sil':
            case 'delwarps':
                case 'removewarp':
                case 'removewarp':
                if (getPlayerTag.search("perm:Admin") != -1) {
                    if (warpName.search(args) == -1) {
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§cWarp bulunamadı" } ] }` );
                    } else {
                        world.getDimension("overworld").runCommand(`kill @e[type=tgm:warp,name=${args}]` );
                        world.getDimension("overworld").runCommand(`tellraw "${player}" { "rawtext": [ { "text": "§bWarp başarı ile kaldırıldı\n §aName §7: §e${args}§r" } ] }` );
                    }
                } else {
                    world.getDimension("overworld").runCommand(`tellraw "${player}" {"rawtext":[{"text":"§cBu komutu kullanmak için yetkin yok!"}]}` );
                }
            break;
            case 'warp-liste':
                case 'listwarps':
                    world.getDimension("overworld").runCommand(`tellraw "${player}" {"rawtext":[{"text":"${warpName.replace(/found /i,"§2Warp listesi §2>>\n §7- §a").replace(/, /g,"§r\n §7- §a")}"}]}` );
            break;
            default:
                console.log("oldu")
        }
    }
});

CommandHandler.register(registration1, (interaction) => {
  console.log("oldu")
})
CommandHandler.register(registration2, (interaction) => {
  console.log("oldu")
})
CommandHandler.register(registration3, (interaction) => {
  console.log("oldu")
})
CommandHandler.register(registration4, (interaction) => {
  console.log("oldu")
})