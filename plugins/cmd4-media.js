let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐌𝐄𝐃𝐈𝐀╭──╯

┌── *IMAGENES* 🎴
├ */kpop* - <blackpink / exo / bts>
├ */cristianoronaldo*
├ */messi*
├ */meme*
├ */itzy*
├ */blackpink*
├ */lolivid*
├ */loli*
├ */navidad*
├ */ppcouple*
├ */wpmontaña*
├ */pubg*
├ */wpgaming*
├ */wpaesthetic*
├ */wpaesthetic2*
├ */wprandom*
├ */wallhp*
├ */wpvehiculo*
├ */wpmoto*
├ */coffee*
├ */pentol*
├ */caricatura*
├ */ciberespacio*
├ */technology*
├ */doraemon*
├ */hacker*
├ */planeta*
├ */randomprofile*
├ */neko*
├ */waifu*
├ */akira*
├ */akiyama*
├ */anna*
├ */asuna*
├ */ayuzawa*
├ */boruto*
├ */chiho*
├ */chitoge*
├ */deidara*
├ */erza*
├ */elaina*
├ */eba*
├ */emilia*
├ */hestia*
├ */hinata*
├ */inori*
├ */isuzu*
├ */itachi*
├ */itori*
├ */kaga*
├ */kagura*
├ */kaori*
├ */keneki*
├ */kotori*
├ */kurumi*
├ */madara*
├ */mikasa*
├ */miku*
├ */minato*
├ */naruto*
├ */nezuko*
├ */sagiri*
├ */sasuke*
├ */sakura*
└ */cosplay*
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
handler.help = ["picture"];
handler.tags = ["main"];
handler.command = /^(picture|runtime|uptime)$/i;
export default handler;
