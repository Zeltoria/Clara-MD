import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?`
m.reply(wait)
  let res = await fetch(`https://api.zeltoria.my.id/api/download/instagram?apikey=${global.zeltoria}&url=${text}`)
  let x = await res.json()
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.result[0].url, 'instagram.mp4', cap, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = true

export default handler