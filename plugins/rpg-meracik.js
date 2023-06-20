import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
 
             let timeoute = 1000
             let timeoutem = 60000
             let timeoutu = 600000
             let timeouto = 1000
             let timeouten = 60000
             let timeoutum = 600000
             let timeoutol = 1000
             let timeoutel = 60000
             let timeoutul = 600000
             let timeoutog = 1000
             let timeouteg = 60000
             let timeoutug = 600000
             let timeoutoy = 1000
             let timeoutey = 60000
             let timeoutuy = 600000
             let timeoutst = 1000
             let timeoutstt = 60000
             let timeoutsttt = 600000
             let timeoutww = 1000
             let timeoutwww = 60000
             let timeoutwwww = 600000
             let type = (args[0] || '').toLowerCase()
                 switch (type) {
                     case 'ramuan': 
                                     let apelu = global.db.data.users[m.sender].apel
                                     let angguru = global.db.data.users[m.sender].anggur
                                     let manggau = global.db.data.users[m.sender].mangga
                                     let pisangu = global.db.data.users[m.sender].pisang
                                     let jeruku = global.db.data.users[m.sender].jeruk 
                                     let __waktuga = (new Date - global.db.data.users[m.sender].lastramuanclaim)
                                     let _waktuga = (600000 - __waktuga)
                                     let waktuga = clockString(_waktuga)
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply('*Pastikan Kamu Memiliki Semua Buah Buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastramuanclaim > 600000) {
                                 	if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggas = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jeruks = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apels = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _ramuans = `${pickRandom(['1','2','3','4','5'])}`.trim()
                                     let ramuans = (_ramuans * 1)
                                     let manggas = (_manggas * 1)
                                     let anggurs = (_anggurs * 1)
                                     let jeruks = (_jeruks * 1)
                                     let apels = (_apels * 1)
                                     let pisangs = (_pisangs * 1)
                                     global.db.data.users[m.sender].mangga -= manggas * 1
                                     global.db.data.users[m.sender].anggur -= anggurs * 1
                                     global.db.data.users[m.sender].jeruk -= jeruks * 1
                                     global.db.data.users[m.sender].apel -= apels * 1
                                     global.db.data.users[m.sender].pisang -= pisangs * 1
                                     global.db.data.users[m.sender].ramuan += ramuans * 1
                                     global.db.data.users[m.sender].lastramuanclaim = new Date * 1
                                     let srcs = `
Berhasil Meracik Ramuan:
-${apels} Apel
-${manggas} Mangga
-${anggurs} Anggur
-${jeruks} Jeruk
-${pisangs} Pisang

Selamat Kamu Mendapatkan ${ramuans} Ramuan
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutu)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcs, m)
                                      }, timeoutem)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Mengaduk Ramuan', m)
                                      }, timeoute)
                                      } else m.reply(`Pastikan Anggur Kamu *500* Untuk Bisa Meracik Ramuan`)
                                   } else m.reply(`Pastikan Jeruk Kamu *500* Untuk Bisa Meracik Ramuan`)
                                } else m.reply(`Pastikan Pisang Kamu *500* Untuk Bisa Meracik Ramuan`)
                             } else m.reply(`Pastikan Apel Kamu *500* Untuk Bisa Meracik Ramuan`)
                          } else m.reply(`Pastikan Mangga Kamu *500* Untuk Bisa Meracik Ramuan`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktuga} Lagi Untuk Meracik Kembali `)
                     break 
                     case 'potion':
                                     let apele = global.db.data.users[m.sender].apel
                                     let anggure = global.db.data.users[m.sender].anggur
                                     let manggae = global.db.data.users[m.sender].mangga
                                     let pisange = global.db.data.users[m.sender].pisang
                                     let jeruke = global.db.data.users[m.sender].jeruk 
                                     let __waktution = (new Date - global.db.data.users[m.sender].lastpotionclaim)
                                     let _waktution = (600000 - __waktution)
                                     let waktution = clockString(_waktution)
                                     if (apele == 0 || anggure == 0 || manggae == 0 || pisange == 0 || jeruke == 0) return m.reply('*Pastikan Kamu Memiliki Semua Buah Buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastpotionclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggan = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apeln = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _potionn = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let potionn = (_potionn * 1)
                                     let manggan = (_manggan * 1)
                                     let anggurn = (_anggurn * 1)
                                     let jerukn = (_jerukn * 1)
                                     let apeln = (_apeln * 1)
                                     let pisangn = (_pisangn * 1)
                                     global.db.data.users[m.sender].mangga -= manggan * 1
                                     global.db.data.users[m.sender].anggur -= anggurn * 1
                                     global.db.data.users[m.sender].jeruk -= jerukn * 1
                                     global.db.data.users[m.sender].apel -= apeln * 1
                                     global.db.data.users[m.sender].pisang -= pisangn * 1
                                     global.db.data.users[m.sender].potion += potionn * 1
                                     global.db.data.users[m.sender].lastpotionclaim = new Date * 1
                                     let srcn = `
Berhasil Meracik Potion:
-${apeln} Apel
-${manggan} Mangga
-${anggurn} Anggur
-${jerukn} Jeruk
-${pisangn} Pisang

Selamat Kamu Mendapatkan ${potionn} Potion
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutum)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcn, m)
                                      }, timeouten)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Mengaduk Potion', m)
                                      }, timeouto)
                                      } else m.reply(`Pastikan Anggur Kamu *500* Untuk Bisa Meracik Potion`)
                                   } else m.reply(`Pastikan Jeruk Kamu *500* Untuk Bisa Meracik Potion`)
                                } else m.reply(`Pastikan Pisang Kamu *500* Untuk Bisa Meracik Potion`)
                             } else m.reply(`Pastikan Apel Kamu *500* Untuk Bisa Meracik Potion`)
                          } else m.reply(`Pastikan Mangga Kamu *500* Untuk Bisa Meracik Potion`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktution} Lagi Untuk Meracik Kembali `)
                     break
                     case 'string':
                                     let apelg = global.db.data.users[m.sender].apel
                                     let anggurg = global.db.data.users[m.sender].anggur
                                     let manggag = global.db.data.users[m.sender].mangga
                                     let pisangg = global.db.data.users[m.sender].pisang
                                     let jerukg = global.db.data.users[m.sender].jeruk 
                                     let __waktutiong = (new Date - global.db.data.users[m.sender].laststringclaim)
                                     let _waktutiong = (600000 - __waktutiong)
                                     let waktutiong = clockString(_waktutiong)
                                     if (apelg == 0 || anggurg == 0 || manggag == 0 || pisangg == 0 || jerukg == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].laststringclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggang = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apelng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangng = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _strings = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let strings = (_strings * 1)
                                     let manggang = (_manggang * 1)
                                     let anggurng = (_anggurng * 1)
                                     let jerukng = (_jerukng * 1)
                                     let apelng = (_apelng * 1)
                                     let pisangng = (_pisangng * 1)
                                     global.db.data.users[m.sender].mangga -= manggang * 1
                                     global.db.data.users[m.sender].anggur -= anggurng * 1
                                     global.db.data.users[m.sender].jeruk -= jerukng * 1
                                     global.db.data.users[m.sender].apel -= apelng * 1
                                     global.db.data.users[m.sender].pisang -= pisangng * 1
                                     global.db.data.users[m.sender].string += strings * 1
                                     global.db.data.users[m.sender].laststringclaim = new Date * 1
                                     let srcng = `
Berhasil Meracik String:
-${apelng} Apel
-${manggang} Mangga
-${anggurng} Anggur
-${jerukng} Jeruk
-${pisangng} Pisang

Selamat Kamu Mendapatkan String: 
+${strings}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutul)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcng, m)
                                      }, timeoutel)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Meracik String', m)
                                      }, timeoutol)
                                      } else m.reply(`Pastikan Anggur Kamu *500* Untuk Bisa Meracik String`)
                                   } else m.reply(`Pastikan Jeruk Kamu *500* Untuk Bisa Meracik String`)
                                } else m.reply(`Pastikan Pisang Kamu *500* Untuk Bisa Meracik String`)
                             } else m.reply(`Pastikan Apel Kamu *500* Untuk Bisa Meracik String`)
                          } else m.reply(`Pastikan Mangga Kamu *500* Untuk Bisa Meracik String`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktutiong} Lagi Untuk Meracik Kembali `)
                     break
                     case 'sword':
                                     let iron = global.db.data.users[m.sender].iron
                                     let kayu = global.db.data.users[m.sender].kayu
                                     let string = global.db.data.users[m.sender].string
                                     let __waktutions = (new Date - global.db.data.users[m.sender].lastswordclaim)
                                     let _waktutions = (600000 - __waktutions)
                                     let waktutions = clockString(_waktutions)
                                     if (iron == 0 || kayu == 0 || string == 0) return m.reply('*Pastikan Kamu Memiliki Semua*\n*Seperti Iron, Kayu, String*')
                                     if (new Date - global.db.data.users[m.sender].lastswordclaim > 600000) {
                                     if (global.db.data.users[m.sender].iron > 4) {
                                 	if (global.db.data.users[m.sender].kayu > 499) {
                                 	if (global.db.data.users[m.sender].string > 9) {
                                     let _ironn = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _kayunn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _stringn = `${pickRandom(['1','2','3','4','5','6','7','8','9'])}`.trim()
                                     let _swordn = `${pickRandom(['1','2'])}`.trim()
                                     let swordn = (_swordn * 1)
                                     let ironn = (_ironn * 1)
                                     let kayun = (_kayunn * 1)
                                     let stringn = (_stringn * 1)
                                     global.db.data.users[m.sender].iron -= ironn * 1
                                     global.db.data.users[m.sender].kayu -= kayun * 1
                                     global.db.data.users[m.sender].string -= stringn * 1
                                     global.db.data.users[m.sender].sword += swordn * 1
                                     global.db.data.users[m.sender].lastswordclaim = new Date * 1
                                     let srcngs = `
Berhasil Meracik Sword:
-${ironn} Iron
-${kayun} Kayu
-${stringn} String

Selamat Kamu Mendapatkan Sword: 
+${swordn}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutug)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngs, m)
                                      }, timeouteg)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Meracik Sword', m)
                                      }, timeoutog)
                                 } else m.reply(`Pastikan String Kamu *10* Untuk Bisa Meracik Sword`)
                             } else m.reply(`Pastikan Kayu Kamu *500* Untuk Bisa Meracik Sword`)
                          } else m.reply(`Pastikan Iron Kamu *5* Untuk Bisa Meracik Sword`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktutions} Lagi Untuk Meracik Kembali `)
                     break
                     case 'weapon':
                                     let ironw = global.db.data.users[m.sender].iron
                                     let kayuw = global.db.data.users[m.sender].kayu
                                     let stringw = global.db.data.users[m.sender].string
                                     let swordw = global.db.data.users[m.sender].sword
                                     let __waktutionsw = (new Date - global.db.data.users[m.sender].lastweaponclaim)
                                     let _waktutionsw = (600000 - __waktutionsw)
                                     let waktutionsw = clockString(_waktutionsw)
                                     if (ironw == 0 || kayuw == 0 || stringw == 0 || swordw == 0) return m.reply('*Pastikan Kamu Memiliki Semua*\n*Seperti Iron, Kayu, String, Sword*')
                                     if (new Date - global.db.data.users[m.sender].lastweaponclaim > 600000) {
                                     if (global.db.data.users[m.sender].iron > 9) {
                                 	if (global.db.data.users[m.sender].kayu > 999) {
                                 	if (global.db.data.users[m.sender].string > 9) {
                                 	if (global.db.data.users[m.sender].sword > 9) {
                                     let _ironnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let _kayunnw = `${Math.floor(Math.random() * 1001)}`.trim()
                                     let _stringnnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let _swordnnw = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                             //        let _weaponnw = `${pickRandom(['1','1','1','2','1','1','1','1','1','1','3'])}`.trim()
                                     let swordnnw = (_swordnnw * 1)
                                     let ironnw = (_ironnw * 1)
                                     let kayunnw = (_kayunnw * 1)
                                     let stringnnw = (_stringnnw * 1)
                           //          let weaponnw = (_weaponnw * 1)
                                     global.db.data.users[m.sender].iron -= ironnw * 1
                                     global.db.data.users[m.sender].kayu -= kayunnw * 1
                                     global.db.data.users[m.sender].string -= stringnnw * 1
                                     global.db.data.users[m.sender].sword -= swordnnw * 1
                                     global.db.data.users[m.sender].weapon += 1
                                     global.db.data.users[m.sender].lastweaponclaim = new Date * 1
                                     let srcngsw = `
Berhasil Meracik Weapon:
-${ironnw} Iron
-${kayunnw} Kayu
-${stringnnw} String
-${swordnnw} Sword

Selamat Kamu Mendapatkan Weapon: 
+1
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutwwww)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsw, m)
                                      }, timeoutwww)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Meracik Weapon', m)
                                      }, timeoutww)
                                     } else m.reply(`Pastikan Sword Kamu *10* Untuk Bisa Meracik Weapon`)
                                 } else m.reply(`Pastikan String Kamu *10* Untuk Bisa Meracik Weapon`)
                             } else m.reply(`Pastikan Kayu Kamu *1000* Untuk Bisa Meracik Weapon`)
                          } else m.reply(`Pastikan Iron Kamu *10* Untuk Bisa Meracik Weapon`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktutionsw} Lagi Untuk Meracik Kembali `)
                     break
                     case 'iron':
                                     let emasbiasa = global.db.data.users[m.sender].emas
                                     let stringk = global.db.data.users[m.sender].string
                                     let __waktutionsk = (new Date - global.db.data.users[m.sender].lastsironclaim)
                                     let _waktutionsk = (600000 - __waktutionsk)
                                     let waktutionsk = clockString(_waktutionsk)
                                     if (emasbiasa == 0 || stringk == 0) return m.reply('*Pastikan Kamu Memiliki Semua*\n*Seperti Emas, String*')
                                     if (new Date - global.db.data.users[m.sender].lastsironclaim > 600000) {
                                     if (global.db.data.users[m.sender].emas > 4) {
                                 	if (global.db.data.users[m.sender].string > 4) {
                                     let _emasbiasak = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _stringk = `${pickRandom(['1','2','3','4'])}`.trim()
                                     let _ironk = `${pickRandom(['1','2'])}`.trim()
                                     let ironk = (_ironk * 1)
                                     let emasbiasak = (_emasbiasak * 1)
                                     let stringk = (_stringk * 1)
                                     global.db.data.users[m.sender].emas -= emasbiasak * 1
                                     global.db.data.users[m.sender].string -= stringk * 1
                                     global.db.data.users[m.sender].iron += ironk * 1
                                     global.db.data.users[m.sender].lastsironclaim = new Date * 1
                                     let srcngsk = `
Berhasil Meracik Iron:
-${emasbiasak} Emas
-${stringk} String

Selamat Kamu Mendapatkan Iron: 
+${ironk}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutuy)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsk, m)
                                      }, timeoutey)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk iron', m)
                                      }, timeoutoy)
                                 } else m.reply(`Pastikan String Kamu *5* Untuk Bisa Meracik Iron`)
                          } else m.reply(`Pastikan Emas Kamu *5* Untuk Bisa Meracik Iron`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktutionsk} Lagi Untuk Meracik Kembali `)
                     break
                     case 'pancingan':
                                     let kayuh = global.db.data.users[m.sender].kayu
                                     let stringh = global.db.data.users[m.sender].string
                                     let batuh = global.db.data.users[m.sender].batu 
                                     let pancingan = global.db.data.users[m.sender].pancingan
                                     let __waktutionskh = (new Date - global.db.data.users[m.sender].lastsmancingclaim)
                                     let _waktutionskh = (600000 - __waktutionskh)
                                     let waktutionskh = clockString(_waktutionskh)
                                     if (kayuh == 0 || stringh == 0 || batuh == 0) return m.reply('*Pastikan Kamu Memiliki Semua*\n*Seperti Kayu, Batu, String*')
                                     if (pancingan == 5) return m.reply('*Pancingan Kamu Suah Level Max*')
                                     if (new Date - global.db.data.users[m.sender].lastsmancingclaim > 600000) {
                                     if (global.db.data.users[m.sender].kayu > 499) {
                                 	if (global.db.data.users[m.sender].string > 4) {
                                 	if (global.db.data.users[m.sender].batu > 9) {
                                     global.db.data.users[m.sender].kayu -= 500
                                     global.db.data.users[m.sender].string -= 5
                                     global.db.data.users[m.sender].batu -= 10
                                     global.db.data.users[m.sender].anakpancingan += 150
                                     global.db.data.users[m.sender].lastsmancingclaim = new Date * 1
                                     let srcngsk = `
Berhasil Meracik Pancingan:
-10 Batu
-5 String
-500 Kayu

Selamat Kamu Mendapatkan:
+150 Exp Pancingan
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk Meracik Lagi..', m)
                                      }, timeoutuy)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcngsk, m)
                                      }, timeoutey)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon Tunggu Sedang Meracik Pancingan', m)
                                      }, timeoutoy)
                                      if (pancingan > 0) {
                                      let naiklvl = ((pancingan * 10000) - 1)
                                      if (global.db.data.users[m.sender].anakpancingan > naiklvl) {
                                      global.db.data.users[m.sender].pancingan += 1
                                      global.db.data.users[m.sender].anakpancingan -= (pancingan * 10000)
                                      conn.reply(m.chat, `*Selamat Pancingan Kamu Naik Level*`, m)
                                      }
                                    }
                                 } else m.reply(`Pastikan Batu Kamu *10* Untuk Bisa Meracik Pancingan`)
                              } else m.reply(`Pastikan String Kamu *5* Untuk Bisa Meracik Pancingan`)
                          } else m.reply(`Pastikan Kayu Kamu *500* Untuk Bisa Meracik Pancingan`)
                       } else m.reply(`Kamu Sudah Meracik, Tidak Bisa Meracik Kembali..\nMohon Tunggu ${waktutionskh} Lagi Untuk Meracik Kembali `)
                     break
                           default:
                                  return conn.reply(m.chat, `*List Racikan*\n• Ramuan\n• Potion\n• String\n• Iron\n• Sword\n• Weapon\n• Pancingan\n\nContoh: *${usedPrefix + command} ramuan*`, m)
                           }
                        }

handler.help = ['meracik']
handler.tags = ['rpg']
handler.command = /^(meracik|racik)$/i
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
