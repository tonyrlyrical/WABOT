let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐓𝐎𝐎𝐋𝐒╭──╯

┌── *HERRAMIENTAS* 🛠️
├ */spamwa* - _<numero|texto|cantidad>_
├ */tamaño* - _<cantidad> <imagen / video>_
├ */clima* - _<país> <ciudad>_
├ */encuesta* - _<Pregunta|Opcion1|Opcion2>_
├ */afk* - _<motivo>_
├ */ocr* - _<responde a imagen>_
├ */acortar* - _<enlace / link / url>_
├ */calc* - _<operacion math>_
├ */del* - _<mensaje>_
├ */whatmusic* - _<audio>_
├ */readqr* - _<imagen (QR)>_
├ */qrcode* - _<texto>_
├ */readmore* - _<texto1| texto2>_
├ */styletext* - _<texto>_
├ */traducir* - _<code> <texto>_
├ */nowa* - _<numero>_
├ */covid* - _<pais>_
└ */horario*
${readMore}
`.trim();
    let buttons = [
      { buttonId: "#start", buttonText: { displayText: "𝙸𝙽𝙸𝙲𝙸𝙾" }, type: 1 },
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
