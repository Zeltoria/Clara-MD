import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://bucin-livid.vercel.app/audio/yowaimo2.mp3', "salto.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix =
	/^(lemah|noob|yowaimo|dasar lemah)$/i;
handler.command = new RegExp();

export default handler;
