import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
    await m.reply(wait)
    if (!text) return m.reply('Masukan Nomornya Kak\nContoh: .amv 1')
    if (text == '1') {
        try {
            let resl = await animeVideo()
            let cap = `Nih Kak Videonya`
            await conn.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await m.reply(eror)
        }
    }
    if (text == '2') {
        try {
            let resl = await animeVideo2()
            let cap = `Nih Kak Videonya`
            await conn.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await m.reply(eror)
        }
    }
}
handler.help = ["amv"]
handler.tags = ["anime"]
handler.command = /^(amv)$/i
handler.limit = true
export default handler

async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}