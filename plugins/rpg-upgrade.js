let handler = async (m, { conn, command, args, usedPrefix }) => { 
    try { 
        let user = global.db.data.users[m.sender]
        let kayu = user.kayu * 1
        let batu = user.batu * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        const buttons1 = [
            {buttonId: `${prefix}craft fishingrod`, buttonText: {displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod`}, type: 1},
            {buttonId: `${prefix}craft pickaxe`, buttonText: {displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe`}, type: 1},
            {buttonId: `${prefix}craft sword`, buttonText: {displayText: `Craft ${rpg.emoticon('sword')}Sword`}, type: 1},
        ]
        let lmao1 = `Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} fishingRod*

*📌List yang Bisa Di Upgrade*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
`.trim()
        const buttonMessage1 = {
            text: lmao1,
            footer: wm,
            buttons: buttons1,
            headerType: 1
        
        }
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft fishingrod`, buttonText: {displayText: `Craft ${rpg.emoticon('fishingrod')}FishingRod`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${usedPrefix}craft fishingrod*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (fishingrod > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`, wm, 'inventory', usedPrefix + 'inv', m)
                let _kayu = fishingrod * 25
                let _string = fishingrod * 15
                let _money = fishingrod * 10000
                if (kayu < _kayu || string < _string || money < _money) return conn.sendButton(m.chat, `Material kamu kurang!!${kayu < _kayu ? `\n${rpg.emoticon('kayu')}Kayu Kamu Kurang *${_kayu - kayu}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *${_money - money}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.fishingrod += 1
                user.kayu -= _kayu * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                conn.send2Button(m.chat, `Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`, wm, 'menu', usedPrefix + 'menu', 'inventory', usedPrefix + 'inv', m)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft pickaxe`, buttonText: {displayText: `Craft ${rpg.emoticon('pickaxe')}Pickaxe`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${usedPrefix}craft Pickaxe*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (pickaxe > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let __batu = pickaxe * 25
                let __kayu = pickaxe * 15
                let __money = pickaxe * 15000
                if (batu < __batu || kayu < __kayu || money < __money) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${batu < __batu ? `\n${rpg.emoticon('batu')}Batu kamu kurang *${__batu - batu}*` : ''}${kayu < __kayu ? `\n${rpg.emoticon('kayu')}Kayu kamu kurang *${__kayu - kayu}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${__money - money}*` : ''}`, wm, 'cek inventory', usedPrefix + 'inv', m)
                user.pickaxe += 1
                user.kayu -= __kayu * 1
                user.batu -= __batu * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            case 'sword':
                if (sword == 0) {
                    const buttons = [
                        {buttonId: usedPrefix + `craft sword`, buttonText: {displayText: `Craft ${rpg.emoticon('sword')}sword`}, type: 1},
                    ]
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${usedPrefix}craft sword*`
                    const buttonMessage = {
                        text: lmao,
                        footer: wm,
                        buttons: buttons,
                        headerType: 1
                    }
                    return conn.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                if (sword > 9) return conn.sendButton(m.chat, `*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`, wm, 'inventory', usedPrefix + 'inv', m)
                let _iron = sword * 25
                let ___kayu = sword * 15
                let ___money = sword * 10000
                if (iron < _iron || kayu < ___kayu || money < ___money) return conn.sendButton(m.chat, `
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${kayu < ___kayu ? `\n${rpg.emoticon('kayu')}Kayu kamu kurang *${___kayu - kayu}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *${___money - money}*` : ''}`, wm, 'inventory', usedPrefix + 'inv', m)
                user.sword += 1
                user.iron -= _iron * 1
                user.kayu -= ___kayu * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                conn.sendButton(m.chat, `Succes mengupgrade *${rpg.emoticon('sword')}Sword*`, wm, 'inventory', usedPrefix + 'inv', m)
                break
            default :
                return conn.sendMessage(m.chat, buttonMessage1, { quoted: m })
        }
    } catch (e) {
        console.log(e)
        throw eror
    }
}
handler.help = ['upgrade']
handler.tags = ['rpg']
handler.command = /^(up(grade)?)$/i

handler.fail = null

export default handler
