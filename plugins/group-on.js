let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Huwaaa, Clara Mau Tidur Dulu >,<* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.command = /^(claraoff)$/i

handler.admin = true
handler.group = true

export default handler