let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Kalau Kamu Menemukan Pesan Error, Lapor Pake Perintah Ini\n\nContoh:\n${usedPrefix + command} Selamat Siang Owner, Saya Menemukan Error Seperti <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Bot, Jika ${command.toLowerCase()} Hanya Main-Main Tidak Akan Ditanggapi._`)
}
handler.help = ['report', 'request']
handler.tags = ['main']
handler.command = /^(report|request)$/i
export default handler
