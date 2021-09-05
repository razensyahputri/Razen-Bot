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
        let haha
        if (mancing.rod == 'kayu') {
            haha = 1
        } else if (mancing.rod == 'batu') {
            haha = 2
        } else if (mancing.rod == 'besi') {
            haha = 3
        }
	let hoki1 = pickRandom(['1', '2', '3']) 
	let na = 1 * hoki1 * haha
	let su = pickRandom(['100', '150', '50', '200', '250', '300']) 
	let anj = su * hoki1
	let sa = 26
        let dur
        let pick = pickRandom(['0', '0.25', '0.5', '0.75', '1']) 
        if (mancing.rod == 'kayu') {
            dur = 1 * 1 * pick * 1 * hoki1
        } else if (mancing.rod == 'batu') {
            dur = 0.75 * 0.75 * pick * 0.75 * hoki1
        } else if (mancing.rod == 'god') {
            dur = 0 * 0 * pick * 0 * hoki1
        } else if (mancing.rod == 'besi') {
            dur = 0.5 * 0.5 * pick * 1 * hoki1
        }
      if (user.hoki < sa) {
      let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'sampah', 'sampah', 'sampah', 'sampah', 'sampah'])
      if (hasil === "sampah")
      {
      mancing.sampah += na
      mancing.durability -= dur
      mancing.xpfish += anj 
      }
      else if (hasil === "cod") {
      mancing.cod += na
      mancing.durability -= dur
      mancing.xpfish += anj
      }
      else if (hasil === "tropical") {
      mancing.tropical += na
      mancing.durability -= dur
      mancing.xpfish += anj
      }
      else if (hasil === "salmon") {
      	mancing.salmon += na
          mancing.durability -= dur
          mancing.xpfish += anj
      } else if (hasil === "Golden") {
      mancing.golden += na
      mancing.durability -= dur
      mancing.xpfish += anj
      }
      else if (hasil === "puffer") {
      mancing.puffer += na
      mancing.durability -= dur
      mancing.xpfish += anj
      conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan ðŸŽ£ ${na} ${hasil} dan mendapatkan + ${anj} xpfish dan durability fishing rod mu -${dur}`) 
      }
      }
      } 
      }

handler.help = ['fish']
handler.tags = ['main']
handler.command = /^f(ish)$/
handler.rowner = false

module.exports = handler

