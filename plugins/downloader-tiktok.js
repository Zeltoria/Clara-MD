import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  let { pp, username, description, video_HD, audio } = json.data
  let cap = `*Username:* ${username}\n*Description:* ${description}
`
  conn.sendMessage(m.chat, { video: { url: json.data.video_HD }, caption: cap }, { quoted: m })
  conn.sendMessage(m.chat, { audio: { url: json.data.audio }, mimetype: 'audio/mp4' }, { quoted : m })
  }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^tiktok|tt|ttdl|tiktokdl$/i
handler.limit = true

export default handler