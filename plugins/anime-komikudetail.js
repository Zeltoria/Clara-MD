import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya Mana?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-detail?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let { awal, terbaru, konsep_cerita, komikus, jumlah_pembaca, end } = json.data.metadata
  res = json.data.chapters.map((v) => `*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
let komiku = `• *Judul:* ${json.data.title}
• *Awal:* ${awal}
• *Terbaru:* ${terbaru}
• *Genre:* ${konsep_cerita}
• *Komikus:* ${komikus}
• *Deskripsi:* ${json.data.description}
• *Chapters*: ${res}`
  conn.reply(m.chat, komiku, m)
}
handler.help = ['komikudetail']
handler.tags = ['anime']
handler.command = /^(komikudetail)$/i
handler.limit = true

export default handler