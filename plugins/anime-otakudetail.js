import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya?\nAtau Bisa Nyari Dengan Cara Ketik .otakudesu judul anime`
  let res = await fetch(`https://api.zeltoria.my.id/api/anime/otakudesu/detail?url=${text}&apikey=${global.zeltoria}`)
  let otaku = await res.json()
  let { url } = otaku.url.episodes[0]
let otakuinfo = `• *Status:* ${otaku.status}
• *Judul:* ${otaku.judul}
• *Japanesse*: ${otaku.japanese}
• *Rating*: ${otaku.skor}
• *Produser*: ${otaku.produser}
• *Tipe*: ${otaku.tipe}
• *Total Eps*: ${otaku.total_episode}
• *Durasi*: ${otaku.durasi}
• *Rilis*: ${otaku.tanggal_rilis}
• *Studio*: ${otaku.studio}
• *Genre*: ${otaku.genre}
• *Streaming*: 
${url}
• *Sinopsis*: ${otaku.sinopsis}
`
  conn.sendFile(m.chat, otaku.thumbnail, 'otaku.jpeg', otakuinfo, m)
}
handler.help = ['otakudetail']
handler.tags = ['anime']
handler.command = /^(otakudetail)$/i
handler.limit = true
export default handler
