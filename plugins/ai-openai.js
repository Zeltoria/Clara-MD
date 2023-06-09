import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.ibeng.tech/api/info/gpt3?text=${text}&apikey=APIKEY`)
    let komcol = await res.json()
    let zel = komcol.data
   m.reply(zel.data)
}
handler.help = ['ai','openai']
handler.tags = ['ai']
handler.command = /^(ai|openai|clara)$/i
handler.limit = true
export default handler