import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} url*\n\nExample: ${usedPrefix + command} https://open.spotify.com/track/7p30D2KjK2XW7YUvI6nH3o\n\n*Tips :* Untuk mencari link spotify, bisa juga dengan command *${usedPrefix}spotsearch*`
    if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
    m.reply(wait)
	let res = await fetch(`https://api.alyachan.my.id/api/spotifydl?url=${text}`)
    command = command.toLowerCase()
    let json = await res.json()
	let get_result = json.data
	let ini_txt = `Found : ${text}\n\n`
	ini_txt += `Title : *${get_result.title}*\n`
	ini_txt += `Artists : ${get_result.artist}\n`
	ini_txt += `Duration : ${get_result.duration}\n`
	await conn.sendFile(m.chat, get_result.thumbnail, 'spot.jpg', ini_txt, m)
	if (command.includes('mp3')) {
		await conn.sendMessage(m.chat, {document: { url: get_result.url }, mimetype: 'audio/mpeg', fileName: `${get_result.artist} - ${get_result.title}.mp3`}, { quoted : m })
	} else {
		await conn.sendMessage(m.chat, { audio: { url: get_result.url }, mimetype: 'audio/mp4' }, { quoted : m })
	}
}

handler.help = ['spotifydl']
handler.tags = ['downloader']
handler.command = /^(spotifydl)$/i

handler.limit = true

export default handler
