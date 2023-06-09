import { Configuration, OpenAIApi } from 'openai'
const configuration = new Configuration({ organization: `${global.org}`, apiKey: `${global.openai}` }); 
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, text, command }) => {
    try {
        if (!text) throw new Error(`Membuat gambar dari AI.\n\nContoh:\n.img Rumah kayu diatas gunung bersalju\n\n\n\nCreate image from AI\n\nExample:\n.img Wooden house on snow mountain`);
        
        await m.reply(wait)
        const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });
        
        conn.sendFile(m.chat, response.data.data[0].url, text)
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}


handler.help = ['dalle']
handler.tags = ['ai']
handler.command = /^(dalle)$/i

handler.premium = false
handler.limit = true

export default handler





let { Configuration, OpenAIApi } = require("openai")
let fetch = require("node-fetch")
let { generateWAMessageFromContent } = require("@adiwajshing/baileys")
let fs = require('fs')
const configuration = new Configuration({ organization: `${global.org}`, apiKey: `${global.openai}` }); 
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, text }) => {
      try {
            if (!text) return m.reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const response = await openai.createImage({
            prompt: text,
            n: 1,
            size: "1024x1024",
        });
        
        conn.sendFile(m.chat, response.data.data[0].url, text)
        
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
        } else {
            console.log(error);
            m.reply(error.message);
        }
    }
}
handler.help = ['imageai']
handler.tags = ['fun']
handler.command = /^(img|imgai|imageai)$/i
module.exports = handler