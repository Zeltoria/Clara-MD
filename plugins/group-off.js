let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh, Clara Baru Bangun Nih >,<* ')
}


handler.command = /^(claraon)$/i
handler.group = true
handler.admin = true

export default handler