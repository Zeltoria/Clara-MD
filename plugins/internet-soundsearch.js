import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/search/soundcloud?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  m.reply(anu)
}
handler.help = ['soundsearch']
handler.tags = ['internet']
handler.command = /^(soundsearch)$/i
handler.limit = true

export default handler
