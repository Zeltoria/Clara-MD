import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukan Nama Charanya!!`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/character?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Name:* ${v.name}\n*Alias:* ${v.alias_name}\n*Anime:* ${v.anime}\n*Manga:* ${v.manga}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
}
handler.help = ['charainfo']
handler.tags = ['anime']
handler.command = /^(charainfo)$/i
handler.limit = true
export default handler
