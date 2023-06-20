import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `╔┈┈「 *Info User* 」
╎
╎❏ *Nama:*  %name 
╎❏ *Nomor:* %tag
╎❏︎ *Premium:* %prems
╎❏︎ *Limit:* %limit
╎❏︎ *Money:* %money
╎❏ *Role:* %role
╎❏︎ *Level:* %level
╎❏︎ *Xp:* %exp / %maxexp
╎❏︎ *Total Xp:* %totalexp
╠┈┈「 *Info Hari* 」
╎❏ *Waktu:* %wib
╎❏ *Hari:* %week %weton
╎❏ *Tanggal:* %date
╎❏ *Tanggal Islam:* %dateIslamic
╠┈┈「 *Info Bot* 」
╎❏ *Bot Name:* %me
╎❏ *Mode:* %mode
╎❏ *Platform:* %platform
╎❏ *Type:* Node.Js
╎❏ *Baileys:* Multi Device
╎❏ *Prefix:* [ *%_p* ]
╎❏ *Uptime:* %muptime
╎❏ *Database:* %rtotalreg dari %totalreg
╚┈┈┈┈┈┈┈┈┈❖
%readmore
`.trimStart(),
  header: '╔┈「 %category 」',
  body: '╎ぎ %cmd',
  footer: '╚┈┈┈┈┈┈┈┈┈❖',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
let tags = {
'main': 'Main',
'ai': 'AI',
'anime': 'Animanga',
'internet': 'Internet',
'downloader': 'Download',
'sticker': 'Sticker',
'tools': 'Tools',
'internet': 'Internet',
'islamic': 'Islamic',
'group': 'Group',
'game': 'Game',
'rpg': 'RPG',
'quotes': 'Quotes',
'maker': 'Maker',
'owner': 'Owner',
}
 
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
      
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
    let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
 
 let fotonya = 'https://telegra.ph/file/c5170017e92f837e28d5f.jpg'
 let namabotnya = `Clara - Multidevice`
 
 
 function _0x3597(){var _0x5dd904=['205167LUHyqm','613033cfDkqG','56310zClfDf','35oyfuff','1797360TsPuex','990IAJZpJ','sendMessage','3943740XslaEf','353210wghoKm','author','22jZSBIp','579944TzGnnR'];_0x3597=function(){return _0x5dd904;};return _0x3597();}function _0x4ec4(_0x506b58,_0x3a05d1){var _0x359705=_0x3597();return _0x4ec4=function(_0x4ec4e3,_0x1ee63c){_0x4ec4e3=_0x4ec4e3-0x1c3;var _0x1c128d=_0x359705[_0x4ec4e3];return _0x1c128d;},_0x4ec4(_0x506b58,_0x3a05d1);}function _0x96a002(_0x55cf8c,_0x3c0b91){return _0x4ec4(_0x3c0b91-0xb9,_0x55cf8c);}(function(_0x577d72,_0x3be57d){var _0x497e25=_0x577d72();function _0x346403(_0x47e3af,_0x567b1f){return _0x4ec4(_0x567b1f-0x2be,_0x47e3af);}while(!![]){try{var _0x1f6b16=-parseInt(_0x346403(0x489,0x48b))/0x1+parseInt(_0x346403(0x486,0x488))/0x2*(parseInt(_0x346403(0x48a,0x48a))/0x3)+-parseInt(_0x346403(0x485,0x482))/0x4+-parseInt(_0x346403(0x48c,0x486))/0x5+parseInt(_0x346403(0x484,0x485))/0x6+parseInt(_0x346403(0x486,0x481))/0x7*(-parseInt(_0x346403(0x48d,0x489))/0x8)+parseInt(_0x346403(0x482,0x483))/0x9*(parseInt(_0x346403(0x486,0x48c))/0xa);if(_0x1f6b16===_0x3be57d)break;else _0x497e25['push'](_0x497e25['shift']());}catch(_0x1acb6e){_0x497e25['push'](_0x497e25['shift']());}}}(_0x3597,0x823fb),conn[_0x96a002(0x280,0x27f)](m['chat'],{'text':text,'contextInfo':{'externalAdReply':{'title':namabotnya,'body':global[_0x96a002(0x284,0x282)],'thumbnailUrl':fotonya,'sourceUrl':sig,'mediaType':0x1,'renderLargerThumbnail':!![]}}}));
      
      
conn.sendFile(m.chat, `${audio.getRandom()}`, "inimenu.mp3", null, m, true, {
			type: "audioMessage",
			ptt: true,
		});
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}

const audio = [
	"https://bucin-livid.vercel.app/audio/yowaimo.mp3",
	"https://bucin-livid.vercel.app/audio/summer.mp3",
	"https://bucin-livid.vercel.app/audio/one.m4a",
];
