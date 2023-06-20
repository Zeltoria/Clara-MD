import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Nama Charanya!!`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/mal-anime?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Episode:* ${v.episode}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
}
handler.help = ['animeinfo']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i
handler.limit = true
export default handler
