let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `Siapa Yg Mau Di Jadiin Premium Sayang?!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Mau Berapa Hari??`
    if (isNaN(txt)) return m.reply(`Hanya Nomor!\n\nExample:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`Success
*Nama:* ${user.name}
*Selama:* ${txt} Hari`)
}
handler.help = ['addprem']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = false
handler.rowner = true

export default handler