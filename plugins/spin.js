let handler = async (m, {conn, text}) => { 
	let user = global.db.data.users[m.sender]
    function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
spins = 0
if (user.spin <= spins) throw 'spin tidak mencukupi untuk melakukan gacha'
if ( user.spin > spins) 
user.spin -= 1
conn.reply(m.chat,`------------- 
${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])} | ${pickRandom(['💵','💰', '❌', '✅', '👑'])}
 --------------
-1 spin`)
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
