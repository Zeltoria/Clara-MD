import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hcha/i.test(m.quoted.text) || /.*hcha/i.test(m.text))
        return !0
    this.tebakchara = this.tebakchara ? this.tebakchara : {}
    if (!(id in this.tebakchara))
        return conn.reply(m.chat, 'Soal Itu Telah Berakhir', m)
    if (m.quoted.id == this.tebakchara[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakchara[id][3])
            delete this.tebakchara[id]
            return conn.reply(m.chat, '*Yah Menyerah :( !*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakchara[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakchara[id][2]
            conn.reply(m.chat, `*Benar!*\n+${this.tebakchara[id][2]} XP`, m)
            clearTimeout(this.tebakchara[id][3])
            delete this.tebakchara[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.reply(m.chat, `*Salah!*`, m)
    }
    return !0
}
export const exp = 0

const buttontebakchara = [
    ['Main Lagi', '/tebakchara']
]
