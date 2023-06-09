import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	m.reply(wait)
	let res = await fetch(`https://api.zeltoria.my.id/api/download/mediafire?url=${args[0]}&apikey=${global.zeltoria}`)
	let data = await res.json()
let json = data.result
let hehe = `_Sedang Di Proses, Mohon Tunggu..._`
m.reply(hehe)
	conn.sendFile(m.chat, data.result.link, data.result.title, '', m, null, { mimetype: data.result.link, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
