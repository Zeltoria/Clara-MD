import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json')
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  conn.sendFile(m.chat, json.url, 'anu.jpg', '_Nih Kak_', m)
}
handler.help = ['geayubi']
handler.tags = ['random']
handler.limit = true
handler.command = /^(geayubi)$/i

export default handler
