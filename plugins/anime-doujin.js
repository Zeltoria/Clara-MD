import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/doujindesu/search?query=${text}&apikey=${global.zeltoria}`)
  let json = await res.json()
  let { title, thumbnail, type, score, status, url } = json.result[0]
let milf = `• *Judul:* ${title}
• *Type:* ${type}
• *Score:* ${score}
• *Status:* ${status}
• *Link:* ${url}
`
  conn.sendFile(m.chat, thumbnail, '', milf, m)
}
handler.help = ['doujin']
handler.tags = ['anime']
handler.command = /^(doujin)$/i
handler.premium = true

export default handler