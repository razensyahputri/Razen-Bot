let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let kays = 5000
let bats = 20000
let handler = async (m, { conn, text, usedPrefix}) => {
	let user = global.db.data.users[m.sender]
        let invu = global.db.data.invmenu[m.sender]
        if (!text) throw `Tipe:
- rod
  - kayu
    - 5000
  - batu
    - 20000
  - besi
    - 50000
  - coming soon
- bait
- boat
- hoki
- premium`
       if (text == 'rod') throw 'pancingan apa ego'
       if (text == 'rod kayu) 
         {
               if (invu.moneyfish < kays) throw 'Uang kurang'
               if (invu.moneyfish > kays) 
               {
               conn.reply(m.chat, `Berhasil membeli pancingan kayu`) 
               invu.rod = kayu
               invu.moneyfish -= kays
               invu.durability += 100
               }
          }
       if (text == 'rod batu') {
           if (invu.moneyfish < bats) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > bats) {
               conn.reply(m.chat, `Berhasil membeli pancingan batu`) 
               invu.rod = batu
               invu.moneyfish -= bats
               invu.durabilty += 150
               }
            }
       
      }
  }

handler.help = ['shop']
handler.tags = ['main']
handler.command = /^s(hop)$/
handler.rowner = false

module.exports = handler
