let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (command == 'kuru') {
conn.sendFile(m.chat, "https://zeltoria.github.io/audio/kuru2.mp3", 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}
if (command == 'kururing') {
conn.sendFile(m.chat, "https://zeltoria.github.io/audio/kuru1.mp3", 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}
if (command == 'kuruto') {
conn.sendFile(m.chat, "https://zeltoria.github.io/audio/kuruto.mp3", 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
}
}
handler.command = /^(kuru|kururing|kuruto)$/i

export default handler