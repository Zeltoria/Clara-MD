import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apk Apa?`
  m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/search/playstore?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Nama:* ${v.nama}\n*Developer:* ${v.developer}\n*Rate:* ${v.rate}\n*Rate 2:* ${v.rate2}\n*Link:* ${v.link}\nLinkDev: ${v.link_dev}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true

export default handler
