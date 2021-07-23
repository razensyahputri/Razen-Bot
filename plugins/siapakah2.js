let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Saya', 'Manusia', 'Kamu', 'Robot', 'Menurutmu', 'Siapaya'])} ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'siapa' + v + ' <pertanyaan>')
handler.tags = ['kerang']
handler.command = /^siapa(kah)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

