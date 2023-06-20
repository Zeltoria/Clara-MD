import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.xyroinee.xyz/api/others/chatgpt?q=${text}&apikey=${global.xyro}`)
    let zel = await res.json()
   m.reply(zel.data)
}
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(ai|openai)$/i
handler.limit = true
export default handler