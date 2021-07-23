let handler = async (m, { conn, args, usedPrefix }) => {
  conn.math = conn.math ? conn.math : {}
  if (args.length < 1) throw `
Mode: ${Object.keys(modes).join(' ( ')}

Contoh penggunaan: ${usedPrefix}math impossible
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
Mode: ${Object.keys(modes).join(' | ')}

Contoh penggunaan: ${usedPrefix}math impossible
`.trim()
  let id = m.chat
  if (id in conn.math) return conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.math[id][0])
  let math = genMath(mode)
  conn.math[id] = [
    await conn.reply(m.chat, `Berapa hasil dari *${math.str}*?\n\nTimeout: ${(20).toFixed(2)} detik\nBonus Jawaban Benar: + 35000 XP & 1 Spin`, m),
    math, 4,
    setTimeout(() => {
      if (conn.math[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah ${math.result}`, conn.math[id][0])
      delete conn.math[id]
    }, math.time)
  ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math(1|imp|imp1)/i

module.exports = handler

let modes = {
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
} 

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
