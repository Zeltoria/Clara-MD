import fetch from 'node-fetch'

const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	try {
		let res = await fetch(link+'autogempa.json')
		let anu = await res.json()
		anu = anu.Infogempa.gempa
		let txt = `*${anu.Wilayah}*\n\n`
		txt += `Tanggal : ${anu.Tanggal}\n`
		txt += `Waktu : ${anu.Jam}\n`
		txt += `Potensi : *${anu.Potensi}*\n\n`
		txt += `Magnitude : ${anu.Magnitude}\n`
		txt += `Kedalaman : ${anu.Kedalaman}\n`
		txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
		await conn.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
	} catch (e) {
		console.log(e)
		try {
			let res = await fetch(`https://api.xyroinee.xyz/api/news/gempa?&apikey=${global.xyro}`)
			let anu = await res.json()
			anu = anu.data.result
			let txt = `*${anu.wilayah}*\n\n`
			txt += `Waktu : ${anu.waktu}\n`
			txt += `Magnitudo : ${anu.magnitudo}\n`
			txt += `Kedalaman : ${anu.kedalaman}\n`
			txt += `Lintang : *${anu.lintang}*\n\n`
			txt += `Bujur : ${anu.bujur}`
			await conn.sendMessage(m.chat, { image: { url: anu.data.result[0].img_map }, caption: txt }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[!] Fitur Error.`)
		}
	}
}

handler.help = ['gempa']
handler.tags = ['internet']
handler.command = /^(gempa)$/i

handler.premium = false
handler.limit = true

export default handler
