import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Cari Apa?`
  let res = await fetch(`https://api.xyroinee.xyz/api/search/xnxx?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.result.map((v) => `*Title:* ${v.title}\n*Info:* ${v.info}\n*Link*: ${v.link}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i
handler.premium = true

export default handler
