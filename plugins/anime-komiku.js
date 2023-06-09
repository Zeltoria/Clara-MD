import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/komiku/search?query=${text}&apikey=${global.zeltoria}`)
  let json = await res.json()
  let { title, title_id, awal, terbaru, description, thumbnail, url } = json.result[0]
let komiku = `• *Title:* ${title}
• *Judul:* ${title_id}
• *Awal:* ${awal}
• *Terbaru:* ${terbaru}
• *Deskripsi:* ${description}
• *Link*: ${url}`
  conn.sendFile(m.chat, thumbnail, '', komiku, m)
}
handler.help = ['komiku']
handler.tags = ['anime']
handler.command = /^(komiku)$/i
handler.limit = true

export default handler
