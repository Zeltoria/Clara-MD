import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Masukan Link\nExample: *.mf https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	m.reply(wait)
	let res = await fetch(`https://api.xyroinee.xyz/api/downloader/mediafire?url=${args[0]}&apikey=${global.xyro}`)
	let data = await res.json()
let json = data.data
	conn.sendFile(m.chat, json.url, json.title, '', m, null, { mimetype: json.url, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
