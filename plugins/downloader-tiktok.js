import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!args[0]) throw `Linknya Mana?`
m.reply(wait)
  let res = await fetch(`https://api.zeltoria.my.id/api/download/tiktok?url=${args[0]}&apikey=${global.zeltoria}`)
  let x = await res.json()
  let anu = x.result
  let cap = `*Nih Kak Videonya* `
  conn.sendFile(m.chat, anu.video.no_watermark, 'tiktok.mp4', cap, m)
}
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler