import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://candaan-api-h590oa540-ardhptr21.vercel.app/api/image/random'
	if (!res.ok) throw await res.text()
        let json = await res.json()
        conn.sendMessage(m.chat, { image: { url: json.data.url }, caption: 'Cringe Ga Sih?' }, m)
}
handler.command = /^(meme2)$/i
handler.tags = ['internet']
handler.help = ['meme2']
handler.limit = true

export default handler
