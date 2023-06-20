import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "dosa.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(bokep|bagi hentai|mau coli|mau colmek|mau ngocok|bagi bokep|coli|bokep|hentai|nonton bokep|nonton hentai|nyari bokep|nyari hentai)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"https://xyroinee.github.io/audio/dosa.mp3",
	"https://xyroinee.github.io/audio/audio_gaboleh-gitu.mp3"
];
