let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let kays = 5000
let handler = async (m, { conn, text, usedPrefix}) => {
	let user = global.db.data.users[m.sender]
        let invu = global.db.data.invmenu[m.sender]
        if (!text) throw `Tipe:
- rod
  - kayu
    - 5000
  - batu
    - 15000
  - besi
    - 50000
  - coming soon
- bait
- boat
- hoki
- premium`
       if (text == 'rod') {
           if (!text) throw 'pancingan apa ego'
           if (text == 'kayu') {
               if (invu.money < kays) throw 'Uang kurang'
               if (invu.money > kays) {
               conn.reply(m.chat, `Berhasil membeli pancingan kayu`) 
               invu.rod = kayu
               invu.money -= kays
               invu.durability += 100
               }
          }
      }
  }

handler.help = ['shop']
handler.tags = ['main']
handler.command = /^s(hop)$/
handler.rowner = false

module.exports = handler
