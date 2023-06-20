let handler = async (m, { 
	conn, 
	args, 
	usedPrefix, 
	command 
}) => {
    let type = (args[0] || '').toLowerCase()
    let wm = global.wm
	let linkgc = global.gc
	let pp = global.thumb
	let user = global.db.data.users[m.sender]
    let timebah = 600000
    let timeda = 600000
    let timela = 600000
    let timega = 600000
    let timebi = 600000
    let timeur = 600000
    let timenix = 600000
    let timefin = 600000
    let timecing = 600000
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    let fox = global.db.data.users[m.sender].fox
    let horse = global.db.data.users[m.sender].horse
    let wolf = global.db.data.users[m.sender].wolf
    let dragon = global.db.data.users[m.sender].dragon
    let cat = global.db.data.users[m.sender].cat
    let phonix = global.db.data.users[m.sender].phonix
    let kyubi = global.db.data.users[m.sender].kyubi
    let centaur = global.db.data.users[m.sender].centaur
    let griffin = global.db.data.users[m.sender].griffin
    let rhinoceros = global.db.data.users[m.sender].rhinoceros
    let lion = global.db.data.users[m.sender].lion
    
    
    let baba = `Contoh penggunaan: *${usedPrefix + command} cat*
*LIST PET:*

› Cat || › Fox || › Horse
› Lion || › Rhinoceros || › Dragon
› Centaur || › Kyubi || › Griffin
› Phonix || › Wolf || › Kucing
› Anjing || › Rubah || › Kuda


Contoh: *.feed cat*
`
    switch (type) {
        case 'fox':
            if (fox == 0) return m.reply('*Kamu Tidak Punya Pet Fox*')
            if (fox == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wfox = (new Date - global.db.data.users[m.sender].foxlastclaim)
            let wfoxa = (600000 - wfox)
            let wfoxaa = clockString(wfoxa)
            if (new Date - global.db.data.users[m.sender].foxlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].foxexp += 20
                    global.db.data.users[m.sender].foxlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Fox*\nKarena Sudah Lapar..', m)
                    }, timebah)
                    if (fox > 0) {
                        let naiklvl = ((fox * 1000) - 1)
                        if (global.db.data.users[m.sender].foxexp > naiklvl) {
                            global.db.data.users[m.sender].fox += 1
                            global.db.data.users[m.sender].foxexp -= (fox * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wfoxaa} Lagi`)
            break
        case 'rhinoceros':
            if (rhinoceros == 0) return m.reply('*Kamu Tudak Punya Pet Rhinoceros*')
            if (rhinoceros == 5) return m.reply('*Pet Kamu Telah Level Maximum*')
            let wbadak = (new Date - global.db.data.users[m.sender].rhinoceroslastclaim)
            let wbadaka = (600000 - wbadak)
            let wbadakaa = clockString(wbadaka)
            if (new Date - global.db.data.users[m.sender].rhinoceroslastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].rhinocerosexp += 15
                    global.db.data.users[m.sender].rhinoceroslastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    if (rhinoceros > 0) {
                        let naiklvl = ((rhinoceros * 1000) - 1)
                        if (global.db.data.users[m.sender].rhinocerosexp > naiklvl) {
                            global.db.data.users[m.sender].rhinoceros += 1
                            global.db.data.users[m.sender].rhinocerosexp -= (rhinoceros * 100)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wbadakaa} Lagi`)
            break
            case 'lion':
            if (lion == 0) return m.reply('*Kamu Tidak Punya Pet Ini*')
            if (lion == 5) return m.reply('*Pet Kamu Telah Level Maximum*')
            let wlion = (new Date - global.db.data.users[m.sender].lionlastclaim)
            let wliona = (600000 - wlion)
            let wlionaa = clockString(wliona)
            if (new Date - global.db.data.users[m.sender].lionlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].lionexp += 15
                    global.db.data.users[m.sender].lionlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    if (lion > 0) {
                        let naiklvl = ((lion * 1000) - 1)
                        if (global.db.data.users[m.sender].lionexp > naiklvl) {
                            global.db.data.users[m.sender].lion += 1
                            global.db.data.users[m.sender].lionexp -= (lion * 100)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wlionaa} Lagi`)
            break
        case 'horse':
            if (horse == 0) return m.reply('*Kamu Tidak Punya Pet Horse*')
            if (horse == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let whorse = (new Date - global.db.data.users[m.sender].horselastclaim)
            let whorsea = (600000 - whorse)
            let whorseaa = clockString(whorsea)
            if (new Date - global.db.data.users[m.sender].horselastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].horseexp += 20
                    global.db.data.users[m.sender].horselastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Horse*\nKarena Sudah Lapar..', m)
                    }, timeda)
                    if (horse > 0) {
                        let naiklvl = ((horse * 1000) - 1)
                        if (global.db.data.users[m.sender].horseexp > naiklvl) {
                            global.db.data.users[m.sender].horse += 1
                            global.db.data.users[m.sender].horseexp -= (horse * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${whorseaa} Lagi`)
            break
        case 'wolf':
            if (wolf == 0) return m.reply('*Kamu Tidak Punya Pet Wolf*')
            if (wolf == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wwolf = (new Date - global.db.data.users[m.sender].wolflastclaim)
            let wwolfa = (600000 - wwolf)
            let wwolfaa = clockString(wwolfa)
            if (new Date - global.db.data.users[m.sender].wolflastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].wolfexp += 15
                    global.db.data.users[m.sender].wolflastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Wolf*\nKarena Sudah Lapar..', m)
                    }, timela)
                    if (wolf > 0) {
                        let naiklvl = ((wolf * 10000) - 1)
                        if (global.db.data.users[m.sender].wolfexp > naiklvl) {
                            global.db.data.users[m.sender].wolf += 1
                            global.db.data.users[m.sender].wolfexp -= (wolf * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wwolfaa} Lagi`)
            break
        case 'dragon':
            if (dragon == 0) return m.reply('*Kamu Tidak Punya Pet Dragon*')
            if (dragon == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wdragon = (new Date - global.db.data.users[m.sender].dragonlastclaim)
            let wdragona = (600000 - wdragon)
            let wdragonaa = clockString(wdragona)
            if (new Date - global.db.data.users[m.sender].dragonlastclaim > 600000) {
                if (global.db.data.users[m.sender].makanandragon > 0) {
                    global.db.data.users[m.sender].makanandragon -= 1
                    global.db.data.users[m.sender].dragonexp += 10
                    global.db.data.users[m.sender].dragonlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Dragon*\nKarena Sudah Lapar..', m)
                    }, timega)
                    if (dragon > 0) {
                        let naiklvl = ((dragon * 10000) - 1)
                        if (global.db.data.users[m.sender].dragonexp > naiklvl) {
                            global.db.data.users[m.sender].dragon += 1
                            global.db.data.users[m.sender].dragonexp -= (dragon * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wdragonaa} Lagi`)
            break 
      case 'kyubi':
            if (kyubi == 0) return m.reply('*Kamu Tidak Punya Pet Kyubi*')
            if (kyubi == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wkyubi = (new Date - global.db.data.users[m.sender].kyubilastclaim)
            let wkyubia = (600000 - wkyubi)
            let wkyubiaa = clockString(wkyubia)
            if (new Date - global.db.data.users[m.sender].kyubilastclaim > 600000) {
                if (global.db.data.users[m.sender].makanankyubi > 0) {
                    global.db.data.users[m.sender].makanankyubi -= 1
                    global.db.data.users[m.sender].kyubiexp += 10
                    global.db.data.users[m.sender].kyubilastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Kyubi*\nKarena Sudah Lapar..', m)
                    }, timebi)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 10000) - 1)
                        if (global.db.data.users[m.sender].kyubiexp > naiklvl) {
                            global.db.data.users[m.sender].kyubi += 1
                            global.db.data.users[m.sender].kyubiexp -= (kyubi * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wkyubiaa} Lagi`)
            break 
      case 'centaur':
            if (centaur == 0) return m.reply('*Kamu Tidak Punya Pet Centaur*')
            if (centaur == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wcentaur = (new Date - global.db.data.users[m.sender].centaurlastclaim)
            let wcentaura = (600000 - wcentaur)
            let wcentauraa = clockString(wcentaura)
            if (new Date - global.db.data.users[m.sender].centaurlastclaim > 600000) {
                if (global.db.data.users[m.sender].makanancentaur > 0) {
                    global.db.data.users[m.sender].makanancentaur -= 1
                    global.db.data.users[m.sender].centaurexp += 10
                    global.db.data.users[m.sender].centaurlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Centaur*\nKarena Sudah Lapar..', m)
                    }, timeur)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 10000) - 1)
                        if (global.db.data.users[m.sender].centaurexp > naiklvl) {
                            global.db.data.users[m.sender].centaur += 1
                            global.db.data.users[m.sender].centaurexp -= (centaur * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wcentauraa} Lagi`)
            break 
         case 'phonix':
            if (phonix == 0) return m.reply('*Kamu Tidak Punya Pet Phonix*')
            if (phonix == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wphonix = (new Date - global.db.data.users[m.sender].phonixlastclaim)
            let wphonixa = (600000 - wphonix)
            let wphonixaa = clockString(wphonixa)
            if (new Date - global.db.data.users[m.sender].phonixlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananphonix > 0) {
                    global.db.data.users[m.sender].makananphonix -= 1
                    global.db.data.users[m.sender].phonixexp += 10
                    global.db.data.users[m.sender].phonixlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Phonix*\nKarena Sudah Lapar..', m)
                    }, timenix)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 10000) - 1)
                        if (global.db.data.users[m.sender].phonixexp > naiklvl) {
                            global.db.data.users[m.sender].phonix += 1
                            global.db.data.users[m.sender].phonixexp -= (phonix * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wphonixaa} Lagi`)
            break
        case 'griffin':
            if (griffin == 0) return m.reply('*Kamu Tidak Punya Pet Griffin*')
            if (griffin == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wgriffin = (new Date - global.db.data.users[m.sender].griffinastclaim)
            let wgriffina = (600000 - wgriffin)
            let wgriffinaa = clockString(wgriffina)
            if (new Date - global.db.data.users[m.sender].griffinlastclaim > 600000) {
                if (global.db.data.users[m.sender].makanangriffin > 0) {
                    global.db.data.users[m.sender].makanangriffin -= 1
                    global.db.data.users[m.sender].griffinexp += 10
                    global.db.data.users[m.sender].griffinlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Griffin*\nKarena Sudah Lapar..', m)
                    }, timefin)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 10000) - 1)
                        if (global.db.data.users[m.sender].griffinexp > naiklvl) {
                            global.db.data.users[m.sender].griffin += 1
                            global.db.data.users[m.sender].griffinexp -= (griffin * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wgriffinaa} Lagi`)
            break
        case 'cat':
            if (cat == 0) return m.reply('*Kamu Tidak Punya Pet Cat*')
            if (cat == 5) return m.reply('*Pet Kamu Sudah Level Max *')
            let wcat = (new Date - global.db.data.users[m.sender].catlastclaim)
            let wcata = (600000 - wcat)
            let wcataa = clockString(wcata)
            if (new Date - global.db.data.users[m.sender].catlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].catexp += 20
                    global.db.data.users[m.sender].catlastclaim = new Date * 1
                    conn.reply(m.chat, `Memberi Makan ${type} Sukses`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya Memberi Makan *Cat*\nKarena Sudah Lapar..', m)
                    }, timecing)
                    if (cat > 0) { 
                        let naiklvl = ((cat * 1000) - 1)
                        if (global.db.data.users[m.sender].catexp > naiklvl) {
                            global.db.data.users[m.sender].cat += 1
                            global.db.data.users[m.sender].catexp -= (cat * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wcataa} Lagi`)
            break
            case 'rubah':
            if (rubah == 0) return m.reply('*Kamu Belum Memiliki Pet Rubah*')
            if (rubah == 10) return m.reply('*Pet Kamu Sudah Level Max*')
            let wrubah = (new Date - user.foxlastfeed)
            let wrubaha = (600000 - wrubah)
            let wrubahaa = clockString(wrubaha)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    conn.reply(m.chat, `Berhasil Memberi Makan Pet ${type}`, m)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            conn.reply(m.chat, `*Selamat Pet Rubah Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wrubahaa} Lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu Belum Memiliki Pet Kucing*')
            if (kucing == 10) return m.reply('*Pet Kamu Sudh Level Max*')
            let wkucing = (new Date - user.catlastfeed)
            let wkucinga = (600000 - wkucing)
            let wkucingaa = clockString(wkucinga)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    conn.reply(m.chat, `Berhasil Memberi Makan Pet ${type}`, m)
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            conn.reply(m.chat, `*Selamat Pet Kucing Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wkucingaa} Lagi`)
            break
        case 'anjing':
            if (anjing == 0) return m.reply('*Kamu Belum Memiliki Pet Anjing*')
            if (anjing == 10) return m.reply('*Pet Kamu Sudah Level Max*')
            let wanjing = (new Date - user.doglastfeed)
            let wanjinga = (600000 - wanjing)
            let wanjingaa = clockString(wanjinga)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    conn.reply(m.chat, `Berhasil Memberi Makan Pet ${type}`, m)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            conn.reply(m.chat, `*Selamat Pet Anjing Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wanjingaa} Lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu Belum Memiliki Pet Kuda*')
            if (kuda == 10) return m.reply('*Pet Kamu Sudah Level Max*')
            let wkuda = (new Date - user.horselastfeed)
            let wkudaa = (600000 - wkuda)
            let wkudaaa = clockString(wkudaa)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    conn.reply(m.chat, `Berhasil Memberi Makan Pet ${type}`, m)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            conn.reply(m.chat, `*Selamat Pet Kuda Kamu Naik Level*`, m)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Cukup`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Cobalah Untuk Memberi Dia Makan ${wkudaaa} Lagi`)
            break
        default:
        await conn.reply(m.chat, baba, m)
    }
}
handler.help = ['feed']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}