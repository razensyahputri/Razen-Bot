let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let handler = async (m, { conn, text, usedPrefix}) => {
	let hoki1 = pickRandom(['1', '2', '3']) 
	let na = 1 * hoki1
	let sa = 26
	let xpf
    let mancing = global.db.data.invmenu[m.sender]
    let user = global.db.data.users[m.sender]
    if (mancing.hancur === true) throw 'Pancingan Kamu Rusak, beli yang baru, dengan cara ${usedPrefix}fshop'
    if (mancing.hancur === false) 
    {
	let hoki1 = pickRandom(['1', '2', '3']) 
	let na = 1 * hoki1
	let su = pickRandom(['100', '150', '50', '200', '250', '300']) 
	let anj = su * hoki1
	let sa = 26
      if (user.hoki < sa) {
      let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'sampah', 'sampah', 'sampah', 'sampah', 'sampah'])
      if (hasil === "sampah") {
      mancing.sampah += na
      mancing.durability -= 1
      mancing.xpfish += anj 
      }
      else if (hasil === "cod") {
      mancing.cod += na
      mancing.durability -= 1
      mancing.xpfish += anj
      }
      else if (hasil === "tropical") {
      mancing.tropical += na
      mancing.durability -= 1
      mancing.xpfish += anj
      }
      else if (hasil === "salmon") {
      	mancing.salmon += na
          mancing.durability -= 1
          mancing.xpfish += anj
      } else if (hasil === "Golden") {
      mancing.golden += na
      mancing.durability -= 1
      mancing.xpfish += anj
      }
      conn.reply(m.chat, `Berhasil Memancing
Kamu mendapatkan ðŸŽ£ ${na} ${hasil} dan mendapatkan + ${anj} xpfish`) 
      }
      } 
      }

handler.help = ['fish']
handler.tags = ['main']
handler.command = /^f(ish)$/
handler.rowner = false

module.exports = handler

