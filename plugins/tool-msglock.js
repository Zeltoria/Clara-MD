let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Uhm.. Teksnya Mana?\n\nexample:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) return await m reply(`${text} Tidak Terdaftar!`)
    msgs[text].locked = !/^un/i.test(command)
    m.reply('Berhasil Dikunci!')
}
    handler.rowner = true
    handler.help = ['unlockmsg', 'lockmsg']
    handler.tags = ['tools']
    handler.command = /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i

export default handler