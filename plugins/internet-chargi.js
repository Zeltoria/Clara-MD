import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/others/chargi?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  let gi = anu.data
  let teks = `*Name:* ${gi.name}\n*Fullname:* ${gi.fullname}\n*Title:* ${gi.title}\n*Rarity:* ${gi.rarity}\n*Element:* ${gi.element}\n*WeaponType:* ${gi.weapontype}\n*Substat:* ${gi.substat}\n*Gender:* ${gi.gender}\n*Body:* ${gi.body}\n*Association:* ${gi.association}\n*Region:* ${gi.region}\n*Affiliation:* ${gi.affiliation}\n*Birthday:* ${gi.birthday}\n*Constellation:* ${gi.constellation}\n*Description:* ${gi.description}\n\n\n`
  anu = anu.data.costs.ascend1.map((v) => `*Name:* ${v.name}\n*Count:* ${v.count}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.sendFile(m.chat, gi.images.cover1, '' , teks + anu, m)
}
handler.help = ['charagi']
handler.tags = ['internet']
handler.command = /^(charagi)$/i
handler.limit = true

export default handler
