let handler = async (m, { conn, usedPrefix, command }) => {
	let msgs = db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
    let anunya = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
    let list = anunya.map(v => `├ ${v.nama}`).join('\n')
	if (msg[0]) return conn.reply(m.chat, `┌「 *Daftar Store* 」\n${list}\n└──────────`, m)
	else throw `Belum Ada List Store.\nKetik *${usedPrefix + command} <teks>* Untuk Menambahkan Daftar Store.\n`
}
handler.help = ['store']
handler.tags = ['main']
handler.command = /^list(store|shop)?$/i

export default handler