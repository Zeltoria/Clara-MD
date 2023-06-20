import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mangatoons?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Judul:* ${v.judul}\n*Genre:* ${v.genre}\n*Link:* ${v.link}\n*Thumbnail:* ${v.thumbnail}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, json, m)
}
handler.help = ['mangatoons']
handler.tags = ['anime']
handler.command = /^(mangatoons)$/i
handler.limit = true

export default handler