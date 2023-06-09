import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya Mana?`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/komiku/detail?url=${text}&apikey=${global.zeltoria}`)
  let json = await res.json()
  let { awal, terbaru, konsep_cerita, komikus, jumlah_pembaca, end } = json.metadata
 let { url } = json.chapters[0]
let komiku = `• *Judul:* ${json.title}
• *Awal:* ${awal}
• *Terbaru:* ${terbaru}
• *Genre:* ${konsep_cerita}
• *Komikus:* ${komikus}
• *Deskripsi:* ${json.description}
• *Link*: ${url}`
  conn.reply(m.chat, komiku, m)
}
handler.help = ['komikudetail']
handler.tags = ['anime']
handler.command = /^(komikudetail)$/i
handler.limit = true

export default handler