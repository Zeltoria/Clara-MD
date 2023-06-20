import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-latest?apikey=${global.xyro}`)
  let json = await res.json()
  res = json.data.map((v) => `*Title:* ${v.title}\n*Update:* ${v.update}\n*Chapter:* ${v.chapter}\n*Thumbnail:* ${v.thumbnail}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, json.data[0].thumbnail, 'anunya.jpg', res, m)
}
handler.help = ['komikulatest']
handler.tags = ['anime']
handler.command = /^(komikulatest)$/i
handler.limit = true
export default handler
