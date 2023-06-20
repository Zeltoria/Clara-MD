import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.xyroinee.xyz/api/asupan/image/china?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(china)$/i
handler.tags = ['random']
handler.help = ['china']
handler.premium = false
handler.limit = true

export default handler