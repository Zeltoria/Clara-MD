const { proto } = (await import("@adiwajshing/baileys")).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw "Balas Pesan Dengan Perintah *" + usedPrefix + command + "*";
	if (!text) throw "Penggunaan: " + usedPrefix + command + " <teks>\n\nContoh:\n" + usedPrefix + command + " tes";
	let msgs = global.db.data.msgs
	if (text in msgs)  throw "[ " + text + " ] Telah Terdaftar Di List Store"
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	return m.reply("Berhasil Menambahkan " + text + " Ke List Store.\n\nAkses Dengan Mengetik Namanya")
}
handler.help = ["addstore"]
handler.tags = ["owner"]
handler.command = ["addstore"]
handler.owner = true
export default handler