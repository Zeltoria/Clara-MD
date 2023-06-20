import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-search?q=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  json = json.data.map((v) => `*Title:* ${v.title}\n*Title_ID:* ${v.title_id}\n*Awal:* ${v.awal}\n*Terbaru:* ${v.terbaru}\n*Link:* ${v.url}\nDeskripsi: ${v.description}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, '', json, m)
}
handler.help = ['komikusearch']
handler.tags = ['anime']
handler.command = /^(komikusearch)$/i
handler.limit = true

export default handler
