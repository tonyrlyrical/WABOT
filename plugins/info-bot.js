import fs from "fs";
let handler = (m) => m;
handler.all = async function (m) {
  let d = new Date(new Date() + 3600000);
  let locale = "es";
  let week = d.toLocaleDateString(locale, { weekday: "long" });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let vn = "./media/bot.mp3";
  let chat = global.db.data.chats[m.chat];
  if (/^.start$/i.test(m.text) || (/^start$/i.test(m.text) && !chat.isBanned)) {
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁 —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Usuario:* ${taguser}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Tiempo activo:* ${uptime}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯`.trim();
    let buttons = [
      {
        buttonId: "#comandos",
        buttonText: { displayText: "𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂" },
        type: 1,
      },
    ];
    let buttonMessage = {
      image: pp,
      caption: str.trim(),
      mentions: [m.sender],
      footer: global.wm,
      buttons: buttons,
    };
    conn.sendPresenceUpdate("composing", m.chat);
    conn.sendMessage(m.chat, buttonMessage, { quoted: m });
    //conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
  }
  return !0;
};
handler.help = ["start"];
handler.tags = ["main"];
handler.command = /^(start|inicio|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    `\n│ *=> 💥 ` + d,
    " Día(s)* ",
    `\n│ *=> 💫 ` + h,
    "* Hora(s) ",
    `\n│ *=> 💠 ` + m,
    "* Minuto(s) ",
    `\n│ *=> ♦ ` + s,
    "* Segundo(s) ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}
