let handler = async (m, { conn }) => {
  try {
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(850) 
    let pp = imagen4;
    let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    let str = `
   โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โโโ *IMAGENES* ๐ด
โ */kpop* - <blackpink / exo / bts>
โ */cristianoronaldo*
โ */messi*
โ */meme*
โ */itzy*
โ */blackpink*
โ */lolivid*
โ */loli*
โ */navidad*
โ */ppcouple*
โ */wpmontaรฑa*
โ */pubg*
โ */wpgaming*
โ */wpaesthetic*
โ */wpaesthetic2*
โ */wprandom*
โ */wallhp*
โ */wpvehiculo*
โ */wpmoto*
โ */coffee*
โ */pentol*
โ */caricatura*
โ */ciberespacio*
โ */technology*
โ */doraemon*
โ */hacker*
โ */planeta*
โ */randomprofile*
โ */neko*
โ */waifu*
โ */akira*
โ */akiyama*
โ */anna*
โ */asuna*
โ */ayuzawa*
โ */boruto*
โ */chiho*
โ */chitoge*
โ */deidara*
โ */erza*
โ */elaina*
โ */eba*
โ */emilia*
โ */hestia*
โ */hinata*
โ */inori*
โ */isuzu*
โ */itachi*
โ */itori*
โ */kaga*
โ */kagura*
โ */kaori*
โ */keneki*
โ */kotori*
โ */kurumi*
โ */madara*
โ */mikasa*
โ */miku*
โ */minato*
โ */naruto*
โ */nezuko*
โ */sagiri*
โ */sasuke*
โ */sakura*
โ */cosplay*
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
handler.help = ["picture"];
handler.tags = ["main"];
handler.command = /^(picture|runtime|uptime)$/i;
export default handler;
