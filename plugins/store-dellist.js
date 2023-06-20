let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) return throw "Gunakan *" + usedPrefix + "liststore* Untuk Melihat Daftar Store Yang Tersimpan."
	let msgs = global.db.data.msgs
	if (!(text in msgs)) return throw "[ " + text + " ] Tidak Terdaftar Di Daftar List."
	delete msgs[text]
	return throw "Berhasil Menghapus Pesan Di Daftar List Dengan Nama >\n" + text
}
handler.help = ["delstore"]
handler.tags = ["owner"]
handler.command = ["delstore"]
handler.owner = true
export default handler