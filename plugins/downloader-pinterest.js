import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Example use ${usedPrefix + command} minecraft`
  m.reply(wait)
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Hasil Pencarian*
${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['downloader']
handler.command = /^(pinterest|pin)$/i

export default handler
