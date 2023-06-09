import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw 'Usernamenya?'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${global.lolkey}`
conn.sendFile(m.chat, res, 'error.jpg', `Sukses Mengambil Foto ${text}*`, m, false)
}
handler.help = ['tiktokfoto', 'pptiktok']
handler.tags = ['internet']
handler.command = /^(tiktokfoto|pptiktok)$/i
handler.limit = true
export default handler
