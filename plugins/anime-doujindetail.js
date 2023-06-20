import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Linknya Mana?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/doujin-detail?url=${text}&apikey=${global.xyro}`)
  let zel = await res.json()
let milf = `
Title: ${zel.data.title}
Tags: ${zel.data.tags}
Status: ${zel.data.metadata.status}
Type: ${zel.data.metadata.type}
Series: ${zel.data.metadata.series}
Author: ${zel.data.metadata.author}
Rating: ${zel.data.metadata.rating}
Link: 
${zel.data.links[0].title}
${zel.data.links[0].url}`
  conn.reply(m.chat, milf, m)
}
handler.help = ['doujindetail']
handler.tags = ['anime']
handler.command = /^(doujindetail)$/i
handler.premium = true

export default handler