let {MessageType} = require('@adiwajshing/baileys') 
let handler = async(m, {conn, text}) => {
    if (!text) throw 'Apa'
    conn.reply(m.chat, `Apa bro`, m.text) 
    }
handler.help = ['bot']
handler.tags = ['kerang']
handler.customPrefix = /(?)/
handler.command = /^bot$/i
