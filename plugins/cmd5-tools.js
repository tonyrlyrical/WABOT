let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   â°âââ®ððððððð ðððððâ­âââ¯

âââ *HERRAMIENTAS* ð ï¸
â */spamwa* - _<numero|texto|cantidad>_
â */tamaÃ±o* - _<cantidad> <imagen / video>_
â */clima* - _<paÃ­s> <ciudad>_
â */encuesta* - _<Pregunta|Opcion1|Opcion2>_
â */afk* - _<motivo>_
â */ocr* - _<responde a imagen>_
â */acortar* - _<enlace / link / url>_
â */calc* - _<operacion math>_
â */del* - _<mensaje>_
â */whatmusic* - _<audio>_
â */readqr* - _<imagen (QR)>_
â */qrcode* - _<texto>_
â */readmore* - _<texto1| texto2>_
â */styletext* - _<texto>_
â */traducir* - _<code> <texto>_
â */nowa* - _<numero>_
â */covid* - _<pais>_
â */horario*
${readMore}
`.trim();
    let buttons = [
      { buttonId: "#start", buttonText: { displayText: "ð¸ð½ð¸ð²ð¸ð¾" }, type: 1 },
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
  } catch {}
};
handler.help = ["tools"];
handler.tags = ["main"];
handler.command = /^(tools|runtime|uptime)$/i;
export default handler;
