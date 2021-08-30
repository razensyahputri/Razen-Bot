let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let harsam = 100
let harsal = 500
let harcod = 1250
let hartro = 3000
let hargol = 7000

let handler = async (m, { conn, text, usedPrefix}) => { 
    let jumlah = parseInt(text)
    if (!jumlah) {
    jumlah = 1
}
    let bobas = global.db.data.users[m.sender]
    let tzy = global.db.data.invmenu[m.sender]
   if (!text) throw `Jual apa kak? 
- sell sampah
  - 100
- sell salmon
  - 500
- sell cod
  - 1250
- sell tropical
  - 3000
- sell gold
  - 7000`
  if (text == 'sampah') {
    if (tzy.sampah < jumlah) throw 'Yang kamu miliki tidak sama dengan yang kamu impikan'
    if (tzy.sampah > jumlah) {
    let anja = jumlah * harsam
    tzy.moneyfish += anja
    conn.reply(m.chat, `Berhasil menjual ${jumlah} sampah`) 
    }
  }
  if (text == 'cod') {
    if (tzy.salcod < jumlah) throw 'Yang kamu miliki tidak sama dengan yang kamu impikan'
    if (tzy.salcod > jumlah) { 
    let anja = jumlah * harcod
    tzy.moneyfish += anja
    conn.reply(m.chat, `Berhasil menjual ${jumlah} cod`) 
    }
  }
  if (text == 'salmon') {
    if (tzy.salmon < jumlah) throw 'Yang kamu miliki tidak sama dengan yang kamu impikan'
    if (tzy.salmon > jumlah) { 
    let anja = jumlah * harsal
    tzy.moneyfish += anja
    conn.reply(m.chat, `Berhasil menjual ${jumlah} salmon`) 
    }
  }
  if (text == 'tropical') {
    if (tzy.tropical < jumlah) throw 'Yang kamu miliki tidak sama dengan yang kamu impikan'
    if (tzy.tropical > jumlah) { 
    let anja = jumlah * hartro
    tzy.moneyfish += anja
    conn.reply(m.chat, `Berhasil menjual ${jumlah} tropical fish`) 
    }
  }
   
}

handler.help = ['sell']
handler.tags = ['main']
handler.command = /^s(ell)$/
handler.rowner = false

module.exports = handler
