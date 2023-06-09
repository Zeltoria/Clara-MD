import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/otakudesu/search?query=${text}&apikey=${global.zeltoria}`)
  let otaku = await res.json()
let otakuinfo = `• *Title:* ${otaku.result[0].title}
• *Genre:* ${otaku.result[0].genres}
• *Status*: ${otaku.result[0].status}
• *Rating*: ${otaku.result[0].rating}
• *Link*: ${otaku.result[0].url}`
  conn.sendFile(m.chat, otaku.result[0].thumbnail, 'otaku.jpeg', otakuinfo, m)
}
handler.help = ['otakudesu']
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.limit = true

export default handler
