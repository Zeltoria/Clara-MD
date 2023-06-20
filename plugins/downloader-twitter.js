import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?\nExample: *.twitterdl https://twitter.com/faqeeyaaz/status/1242789155173617664?s=20&t=DRgdl9U8MwTwpY0o1o-96g*`
m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/twitter?url=${text}&apikey=${global.xyro}`)
  let json = await res.json()
  conn.sendMessage(m.chat, { video: { url: json.data.video }, caption: `_Nih Kak Videonya_` }, { quoted: m })
  }
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^twitter|twitterdl$/i
handler.limit = true

export default handler