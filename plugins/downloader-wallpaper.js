import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Mau Cari Apa?'
    m.reply(wait)
	let zeltoria = await fetch{`https://api.zeltoria.my.id/api/search/wallpaper?query=${text}&apikey=${global.zeltoria}`)
    let wpnya = await zeltoria.json()
	conn.sendMessage(m.chat, { image: { url: wpnya.getRandom() }, caption: `Nih Kak Result Dari ${text} Nya` }, m)
}
handler.help = ['wallpaper']
handler.tags = ['downloader']

handler.command = /^(wallpaper|wp)$/i

export default handler
