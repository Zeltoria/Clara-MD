import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'Cari Apa?'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*_${v.title}_*
*_Link :_* ${v.url}
*_Duration :_* ${v.timestamp}
*_Uploaded :_* ${v.ago}
*_Views :_* ${v.views}`}}).filter(v => v).join('\n••••••••••••••••••••••••••••••••••••••••\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['yts']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i
handler.limit = true

export default handler
