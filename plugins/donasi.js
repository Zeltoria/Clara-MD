let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa* 」
│ • *1 Minggu:* 5K
│ • *1 Bulan:* 15K
│ • *Permanen:* 50K
┠──「 *Pembayaran* 」
│ • *Ovo:* [${global.povo}]
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(donasi|sewa|prem|premium)$/i

export default handler
