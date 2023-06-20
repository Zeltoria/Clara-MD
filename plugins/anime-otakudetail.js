import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya?\nAtau Bisa Nyari Dengan Cara Ketik .otakudesu judul anime`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/otakudesu-detail?url=${text}&apikey=${global.xyro}`)
  let data = await res.json()
  let otaku = data.data
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
• *Batch*: 
${otaku.url.batch}
• *Sinopsis*: ${otaku.sinopsis}
`
  conn.sendFile(m.chat, otaku.thumbnail, 'otaku.jpeg', otakuinfo, m)
}
handler.help = ['otakudetail']
handler.tags = ['anime']
handler.command = /^(otakudetail)$/i
handler.limit = true
export default handler
