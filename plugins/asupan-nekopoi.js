import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let res = await fetch(`https://api.xyroinee.xyz/api/anime/nekopoi?apikey=${global.xyro}`)
	let anu = await res.json()
	conn.sendFile(m.chat, anu.data, 'wikwik.mp4', '_Jangan Coli Ya..._', m)
} 
handler.command = /^(nekopoi)$/i
handler.tags = ['random']
handler.help = ['nekopoi']
handler.premium = true
handler.limit = true

export default handler