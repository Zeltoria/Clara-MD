import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Nama Heronya?', m)
    let res = await fetch(`https://api.zahwazein.xyz/information/mlherodetail?query=${text}&apikey=${global.zenzkey}`)
    let ml = await res.json()
    let hasil = `
• *Nama*: ${ml.result[0].hero_name}
• *Role*: ${ml.result[0].role}
• *Spesialis*: ${ml.result[0].specialty}
• *Lane*: ${ml.result[0].lane}
• *Story*: ${ml.result[0].background_story}
`

    conn.sendFile(m.chat, ml.result[0].avatar, '', hasil, m)
}
handler.help = ['heroml']
handler.tags = ['internet']
handler.command = /^(mlhero|heroml)$/i
handler.limit = true
export default handler
