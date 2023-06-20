import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://bucin-livid.vercel.app/audio/salam.mp3', "salam.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(assalamualaikum|salam|asalamualaikum|assalam|asalam|salam|salom|shalom)$/i;
handler.command = new RegExp();

export default handler;
