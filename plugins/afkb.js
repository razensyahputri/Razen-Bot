let handler = async (m, { conn, text }) => {
  let who
  let dia = m.sender
  if (m.isGroup) who = m.mentionedJid[0]
  if (m.sender) who = m.sender
  else who = m.chat
  let txt = text.replace('@' + dia.split`@`[0], '').trim()
  let user = global.DATABASE.data.users
  user[m.sender].afk = + new Date
  user[m.sender].afkReason = text
  user[who].afk = + new Sate
  user[who].afkreason = text
  conn.reply(m.chat,`
${conn.getName(m.sender)} now AFK, dia AFK bareng @${who.split`@`[0]} dengan alasan ${text ? '' + text : ''}
`, m.text, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
}
handler.help = ['bafk @user [alasan]']
handler.tags = ['main']
handler.command = /^afkbareng$/i

module.exports = handler