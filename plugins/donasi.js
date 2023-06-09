let handler = async (m, { conn }) => {
let sewa = `
❏──「 *Sewa* 」
│ • *1 Minggu:* 5K
│ • *1 Bulan:* 15K
│ • *Permanen:* 50K
┠──「 *Pembayaran* 」
│ • *Ovo:* [${global.povo}]
│ • *Saweria:* [${global.psaweria}]
│ • *Trakteer:* [${global.ptrakterr}]
❏──────────────๑
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi|sewa|prem|premium$/i

export default handler
