let handler = async (m, {conn, text}) => { 
	let user = global.db.data.users[m.sender]
    function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let su
  let txt = text
  let poin = parseInt(txt) 
spins = 0
if (user.spin <= spins) throw 'spin tidak mencukupi untuk melakukan gacha'
if ( user.spin > spins)
if (!poin)
su = 1
if (poin) 
su = 1 * poin
user.spin -= su
conn.reply(m.chat,` Spin Casino
↓  | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} |  ↓
→| ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} |←
↑  | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} |  ↑
- ${su} spin`)
    }


handler.help = ['spin ']
handler.tags = ['game']
handler.command = /^spin$/
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
