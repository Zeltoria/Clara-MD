import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing*`
  m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/soundcloud?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let { title, duration, quality, thumbnail, download } = json.data
  await conn.sendFile(m.chat, thumbnail, 'oh.jpg', `Title: ${title}
Duration: ${duration}
Quality: ${quality}
`, m)
 await conn.sendFile(m.chat, download, '', m)
}
handler.help = ['soundcloud']
handler.tags = ['downloader']
handler.command = /^(soundcloud)$/i
handler.limit = true

export default handler
