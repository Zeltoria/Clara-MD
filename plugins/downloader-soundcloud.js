import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan Linknya\nExample; ${usedPrefix}${command} https://soundcloud.com/sukma-ardha/full-senyum-miss-icha-mixtape-dutch`
	m.reply(wait)
	let res = await fetch(`https://api.alyachan.my.id/api/soundclouddl?url=${text}`)
  let x = res.json()
  let cap = `Judul: ${x.data.title}`
  conn.sendFile(m.chat, x.data.audio.url, '', cap, m)
}
handler.help = ['soundcloud']
handler.tags = ['downloader']
handler.command = /^(soundcloud)$/i
handler.limit = true

export default handler
