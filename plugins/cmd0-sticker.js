let handler = async (m, { conn }) => {
    try {
      let more = String.fromCharCode(8206)
      let readMore = more.repeat(850) 
      let pp = imagen4;
      let taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
      let str = `
    ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐓𝐈𝐂𝐊𝐄𝐑╭──╯
  
┌*tosticker* <responder a imagen , video o url>
├*emojimix* <emoji 1>&<emoji 2>
├*scircle* <imagen>
├*sremovebg* <imagen>
├*semoji* <tipo> <emoji>
├*attp* <texto>
├*attp2* <texto>
├*attp3* <texto>
├*ttp* <texto>
├*ttp2* <texto>
├*ttp3* <texto>
├*ttp4* <texto>
├*ttp5* <texto>
├*pat* <@tag>
├*slap* <@tag>
├*kiss* <@tag>
├*dado*
├*wm* <packname> <author>
├*stickermarker* <efecto> <imagen>
└*stickerfilter* <efecto> <imagen>
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
  handler.help = ["down"];
  handler.tags = ["main"];
  handler.command = /^(down|runtime|uptime)$/i;
  export default handler;
  