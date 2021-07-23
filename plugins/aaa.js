
let handler = async (m, { conn, command, text }) => {
  await conn.reply(m.chat, `${pickRandom(['Sri', 'Barbie', 'Fang'])} ‹- hayolo pilih (Truth Or Dare) 
  jika udah 3 kali kena, di skip aja
`.trim(), m)
}

handler.help = ['ToD']
handler.tags = ['game']
handler.command = /^tod$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]}
