import { world } from "mojang-minecraft"
import CommandBuilder from "../classes/builders/CommandBuilder.js";
import CommandHandler from "../classes/CommandRegistration.js"

const registration = new CommandBuilder()
.setName('yardım')
.setAliases(['y'])
.setDescription('yardım sayfasına eriş')
.setUsage(['yardım', 'y'])
.setCancelMessage(true)
.setPrivate(false)
CommandHandler.register(registration, (interaction) => {
  try {
    world.getDimension("overworld").runCommand(`tellraw "${interaction.player.nameTag}" {"rawtext":[{"text":"§2Prefix: t/ \nt/yardım - bu listeyi açar\nt/setup - gerekli olan herşeyi oluşturur \nt/tpa <Oyuncu> - başka bir oyuncuya ışınlar \nt/para - paranı gösterir \nt/para-gönder <Oyuncu>-<Miktar> - belirtililen oyuncuya para gönderir \nt/bank - bank paranı gösterir \nt/para-yatır <miktar> - bankaya para yatırırsın\nt/para-çek <miktar> - vâr olan paranı çekersin\nt/maden-sat <elmas/altın/demir/kömür/netherite>-<miktar> - maden satırsın (eşyanı eline al)\nt/maden-al <elmas/altın/demir/kömür/netherite>-<miktar> - maden alırsın\nt/warp <Warp ismi> - sizi girilen isim de ki warp'a yollar\nt/warp-ekle <Warp ismi> - warp ekler (sadace perm:Admin yetkisi olanlar)\nt/warp-sil <Warp ismi> - warp siler (sadace perm:Admin yetkisi olanlar)\nt/warp-liste - warp listesi gelir\nt/hub-ayarla - durduğun yeri lobi noktasını ayarlar(sadace perm:Admin yetkisi olanlar)\nt/ev-ayarla - durduğun yeri ev noktan yapar\nt/ev-git - evine gidersin \n\nPusula kullanımı: pc'de sağ tık mobil de ise üstüne basılı tutarak lobiye gidebilirsiniz\nChatRank kullanımı:\n/tag <oyuncu ismi> add rank:<Rank İsmi>"}]}`)
  }
 catch(e) {
    world.getDimension("overworld").runCommand(`say ${e} ${e.stack}`)
  }
  })
