let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Uhm.. Teksnya Mana?\n\nContoh:\n${usedPrefix + command} test`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' Tidak Terdaftar!`
    delete msgs[text]
    m.reply(`berhasil Menghapus Pesan Dengan Nama '${text}'`)
}
handler.help = ['delmsg']
handler.tags = ['tools']
handler.command = /^(-|del)(all|vn|msg|video|audio|img|stic?ker|gif)$/

export default handler