let handler = async (m, { conn }) => {
    try {
      let more = String.fromCharCode(8206)
      let readMore = more.repeat(850) 
      let pp = imagen4;
      let str = `
     โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โ */buscar* - _Comandos de busqueda
โ */sticker* - _Comandos de sticker._
โ */down* - _Comandos de descargas._
โ */grupos*  - _Comandos de grupos._
โ */edit* - _Comandos de ediciรณn._
โ */media* - _Comandos de multimedia._
โ */tools* - _Comandos de utilidad._
โ */audio* - _Comandos de audios._
โ */cmd18* - _Comandos +18._
โ */games* - _Comandos de juegos._
โ */admin* - _Comandos de admin_
โ */about* - _Comandos de informaciรณn_
โ */killchat* - _Comandos de bรบsqueda._
${readMore}
`.trim();
      let buttons = [
        { buttonId: "#start", buttonText: { displayText: "๐ธ๐ฝ๐ธ๐ฒ๐ธ๐พ" }, type: 1 },
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
  