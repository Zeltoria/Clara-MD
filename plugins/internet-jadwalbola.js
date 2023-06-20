import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/search/jadwalbola?&apikey=${global.xyro}`)
  let anu = await res.json()
  anu = anu.data.map((v) => `${v}\n`).join`\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n`
  m.reply(anu)
}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^(jadwalbola)$/i
handler.limit = true

export default handler
