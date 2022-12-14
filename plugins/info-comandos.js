let handler = async (m, { conn }) => {
    try {
      let more = String.fromCharCode(8206)
      let readMore = more.repeat(850) 
      let pp = imagen4;
      let str = `
     ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐅𝐈𝐋𝐄𝐒╭──╯

┌ */buscar* - _Comandos de busqueda
├ */sticker* - _Comandos de sticker._
├ */down* - _Comandos de descargas._
├ */grupos*  - _Comandos de grupos._
├ */edit* - _Comandos de edición._
├ */media* - _Comandos de multimedia._
├ */tools* - _Comandos de utilidad._
├ */audio* - _Comandos de audios._
├ */cmd18* - _Comandos +18._
├ */games* - _Comandos de juegos._
├ */admin* - _Comandos de admin_
├ */about* - _Comandos de información_
└ */killchat* - _Comandos de búsqueda._
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
  handler.help = ["comandos"];
  handler.tags = ["main"];
  handler.command = /^(comandos|commands|runtime|uptime)$/i;
  export default handler;
  