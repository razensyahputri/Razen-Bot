let handler = async (m, { conn, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  conn.reply(m.chat,`
${conn.getName(m.sender)} now AFK, dia AFK dengan alasan ${text ? ': ' + text : ''}
`,m.text, m
)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
