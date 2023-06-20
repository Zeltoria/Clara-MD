import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${ara.getRandom()}`, "ara.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(Ara ara|ara ara|Ara|ara)$/i;
handler.command = new RegExp();

export default handler;


const ara = [
	"https://bucin-livid.vercel.app/audio/ara1.mp3",
	"https://bucin-livid.vercel.app/audio/ara2.mp3",
	"https://bucin-livid.vercel.app/audio/ara.mp3",
	"https://bucin-livid.vercel.app/audio/audio_ara-ara.mp3",
];
