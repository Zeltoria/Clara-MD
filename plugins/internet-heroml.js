import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/others/heroml?q=${text}&apikey=${global.xyro}`)
  let anu = await res.json()
  let hero = anu.data
  let ini = anu.data.gameplay_info
  let story = anu.data.story_info_list
  let teks = `*Name:* ${text}\n*Alias:* ${story.Alias}\n*Origin:* ${story.Origin}\n*Species:* ${story.Species}\n*Gender:* ${story.Gender}\n*Affiliation:* ${story.Affiliation}\n*Weapon:* ${story.Weapons}\n*Abilities:* ${story.Abilities}\n*Height:* ${story.Height}\n`
  
  let kntl = `\n*Realese:* ${hero.release}\n*Role:* ${hero.role}\n*Specialty:* ${hero.specialty}\n*Lane:* ${hero.lane}\n*Price:* ${hero.price}\n\n*Durability:* ${ini.durability}\n*Offense:* ${ini.offense}\n*Control:* ${ini.control_effect}\n*Difficulty:* ${ini.difficulty}\n\n`
  
  anu = anu.data.attributes.map((v) => `*Attributes:* ${v.attribute}\n*Level:* ${v.level_1}\n*Growth:* ${v.growth}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  
  conn.sendFile(m.chat, hero.hero_img, '', teks + kntl + anu, m)
}
handler.help = ['heroml']
handler.tags = ['internet']
handler.command = /^(heroml)$/i
handler.limit = true

export default handler
