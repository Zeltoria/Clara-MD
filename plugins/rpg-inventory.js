let handler = async (m, { conn, usedPrefix }) => {
    let armor = global.db.data.users[m.sender].armor
    let sword = global.db.data.users[m.sender].sword
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let health = global.db.data.users[m.sender].health
    let level = global.db.data.users[m.sender].level
    let limit = global.db.data.users[m.sender].limit
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let atm = global.db.data.users[m.sender].atm
    let anggur = global.db.data.users[m.sender].bibitanggur
    let mangga = global.db.data.users[m.sender].bibitmangga
    let pisang = global.db.data.users[m.sender].bibitpisang
    let apel = global.db.data.users[m.sender].bibitapel
    let jeruk = global.db.data.users[m.sender].bibitjeruk
    let potion = global.db.data.users[m.sender].potion
    let trash = global.db.data.users[m.sender].trash
    let wood = global.db.data.users[m.sender].wood
    let rock = global.db.data.users[m.sender].rock
    let string = global.db.data.users[m.sender].string
    let emerald = global.db.data.users[m.sender].emerald
    let diamond = global.db.data.users[m.sender].diamond
    let gold = global.db.data.users[m.sender].gold
    let iron = global.db.data.users[m.sender].iron
    let pet = global.db.data.users[m.sender].pet
    let cat = global.db.data.users[m.sender].cat
    let fox = global.db.data.users[m.sender].fox
    let bank = global.db.data.users[m.sender].bank
    let dog = global.db.data.users[m.sender].dog
    let horse = global.db.data.users[m.sender].horse
    let common = global.db.data.users[m.sender].common
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let name = m.sender
    let who = m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let str = `
Inventory: *${await conn.getName(name)}*

Money: *${money}*
Bank: *${bank}*
Gold: *${gold}*
Diamond: *${diamond}*
Emerald: *${emerald}*
Potion: *${potion}*
Trash: *${trash}*
Wood: *${wood}*
Iron: *${iron}*
String: *${string}*

Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*.

Pet: *${pet}*
Fox: *${fox}*
Cat: *${cat}*
Dog: *${dog}*
Horse: *${horse}*

Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Emerald Armor' : '' || armor == 6 ? 'Crystal Armor' : '' || armor == 7 ? 'Obsidian Armor' : '' || armor == 8 ? 'Netherite Armor' : '' || armor == 9 ? 'Whiter Armor' : '' || armor == 10 ? 'Dragon Armor' : ''}*
Sword: *${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Wooden Sword' : '' || sword == 2 ? 'Stone Sword' : '' || sword == 3 ? 'Iron Sword' : '' || sword == 4 ? 'Gold Sword' : '' || sword == 5 ? 'Cooper Sword' : '' || sword == 6 ? 'Diamond Sword' : '' || sword == 7 ? 'Emerald Sword' : '' || sword == 8 ? 'Obsidian Sword' : '' || sword == 9 ? 'Nheterite Sword' : '' || sword == 10 ? 'Samurai Dragon Slayer Sword' : ''}*
Pickaxe: *${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'Leather Pickaxe' : '' || pickaxe == 2 ? 'Iron Pickaxe' : '' || pickaxe == 3 ? 'Gold Pickaxe' : '' || pickaxe == 4 ? 'Diamond Pickaxe' : '' || pickaxe == 5 ? 'Emerald Pickaxe' : '' || pickaxe == 6 ? 'Crystal Pickaxe' : '' || pickaxe == 7 ? 'Obsidian Pickaxe' : '' || pickaxe == 8 ? 'Netherite Pickaxe' : '' || pickaxe == 9 ? 'Whiter Pickaxe' : '' || pickaxe == 10 ? 'Dragon Pickaxe' : ''}*
`.trim()
conn.sendMessage(m.chat, { image: { url: pp }, caption: str }, { quoted: m })
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory|my)$/i
handler.limit = true
handler.group = false
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)