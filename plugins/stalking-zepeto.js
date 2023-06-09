import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Masukan ID Nya!!', m)
    let res = await fetch(`https://api.zahwazein.xyz/stalker/nickzepeto?apikey=${global.zenzkey}&query=${text}`)
    let json = await res.json()
    let hasil = `
• *ID*: ${json.result.gameId}
• *NickName*: ${json.result.userName}
`

    m.reply(hasil)
}
handler.help = ['zepetostalk']
handler.tags = ['internet']
handler.command = /^(zepetostalk)$/i
handler.limit = true
export default handler
