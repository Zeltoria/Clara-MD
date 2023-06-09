let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.wm

let caption = `
▧ Pickaxe 
▧ Sword 
▧ Fishingrod 

*❏ Bahan Yang Di Butuhkan*
▧ Pickaxe 
〉 10 Kayu
〉 5 Batu
〉 5 Iron
〉 20 String

▧ Sword 
〉 10 Kayu
〉 15 Iron

▧ Fishingrod 
〉 10 Kayu
〉 2 Iron
〉 20 String

▧ Armor
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

▧ Atm 
〉3 Emerald
〉6 Diamond
〉10k Money

Note:
Jika Ingin Craft Caranya
*Ketik .craft (barang yang mau di craft*
Contoh:
*.craft sword*
Pastikan Kamu Memiliki Bahannya
`
  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return m.reply(`Barang Tidak Cukup!\nUntuk Membuat Pickaxe. Kamu Memerlukan : \n10 Kayu\n5 Iron\n20 String\n5 Batu`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("Sukses membuat 1 Pickaxe")
            break
          case 'sword':
          if (user.sword > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.wood < 10 || user.iron < 15) return m.reply(`Barang Tidak Cukup!\nUntuk Membuat Sword. Kamu Memerlukan :\n10 Kayu\n15 Iron`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            m.reply("Sukses Membuat 1 Sword")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return m.reply(`Barang Tidak Cukup!\nUntuk Membuat Pancingan. Kamu Memerlukan :\n10 Kayu\n5 Iron\n20 String`)
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 2
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            m.reply("Sukses Membuat 1 Pancingan")
            break
          case 'armor':
          if (user.armor > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return m.reply(`Barang Tidak Cukup!\nUntuk Membuat Armor. Kamu Memerlukan :\n30 Iron \n1 Emerald\n5 Diamond`)
            global.db.data.users[m.sender].emerald -= 1
            global.db.data.users[m.sender].iron -= 30
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            m.reply("Sukses Membuat 1 Armor")
            break
            case 'atm':
          if (user.atm > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return m.reply(`Barang Tidak Cukup!\nUntuk Membuat Atm. Kamu Memerlukan :\n10K Money\n3 Emerald\n6 Diamond`)
            global.db.data.users[m.sender].emerald -= 3
            global.db.data.users[m.sender].money -= 10000
            global.db.data.users[m.sender].diamond -= 6
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm = 5000000
            m.reply("Sukses Membuat 1 Atm")
            break

          default:
            return await conn.reply(m.chat, caption, m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.reply(m.chat, caption, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i

export default handler