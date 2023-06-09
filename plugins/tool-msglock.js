let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. teksnya mana?\n\nexample:\n${usedPrefix + command} tes`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) return await conn.sendButton(m.chat, `'${text}' Tidak Terdaftar!`, wm, null, [['List Pesan', '.listall']], m)
    msgs[text].locked = !/^un/i.test(command)
    m.reply('Berhasil Dikunci!')
}
    handler.rowner = true
    handler.help = ['unlockmsg', 'lockmsg']
    handler.tags = ['tools']
    handler.command = /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i

export default handler