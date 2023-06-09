import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hsur/i.test(m.quoted.text) || /.*hsur/i.test(m.text))
        return !0
    this.tebaksurah = this.tebaksurah ? this.tebaksurah : {}
    if (!(id in this.tebaksurah))
        return conn.sendButton(m.chat, 'Soal Itu Telah Berakhir', author, null, buttontebaksurah, m)
    if (m.quoted.id == this.tebaksurah[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaksurah[id][3])
            delete this.tebaksurah[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebaksurah, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebaksurah[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.surah.englishName.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaksurah[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebaksurah[id][2]} XP`, author, null, buttontebaksurah, m)
            clearTimeout(this.tebaksurah[id][3])
            delete this.tebaksurah[id]
        } else if (similarity(m.text.toLowerCase(), json.surah.englishName.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Bantuan', '/hsur'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebaksurah = [
    ['Main Lagi', '/tebaksurah']
]