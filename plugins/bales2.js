let util = require('util')
let path = require('path')
let handler  = async (m, {conn, args, text}) => {
	conn.reply(m.chat, 'Wa\'\alaikumussalam') 
}
handler.customPrefix = /assalamu('alaikum|alaikum)/i
handler.command = new RegExp
module.exports = handler