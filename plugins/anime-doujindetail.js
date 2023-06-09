import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya Mana?`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/doujindesu/detail?query=${url}&apikey=${global.zeltoria}`)
  let json = await res.json()
  let { status, type, series, author, rating } = json.metadata
  let { title, url } = json.links[0]
let milf = `• *Judul:* ${json.title}
• *Tags:* ${json.tags}
• *Rating:* ${rating}
• *Series:* ${series}
• *Author:* ${author}
• *Link:* 
${title}
${url}
`
  conn.sendFile(m.chat, json.thumbnail, '', milf, m)
}
handler.help = ['doujindetail']
handler.tags = ['anime']
handler.command = /^(doujindetail)$/i
handler.premium = true

export default handler