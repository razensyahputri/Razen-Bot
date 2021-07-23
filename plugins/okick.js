let handler = async (m, { conn, args, text}) => {
  if (!text) throw 'Tag salah satu lah'
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user]) 
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  await conn.groupRemove(m.chat, [who])

  
  m.reply(`Asik Ada Mangsa, Otw Headshot`) 
  conn.reply(m.chat,`👏BOOM HEADSHOTT💯,Selamat Tinggal  ${users} 👋👋👋👋Jangan Masuk Lagi 🙌`,m.text) 
}
handler.help = ['headshot'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(headshot)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.owner = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
