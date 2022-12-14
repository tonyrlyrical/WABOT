import fs from 'fs'
let handler = async (m, { command, conn }) => {
  try {
    let apikey = global.keysxxx;
    let who =
      m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
        ? conn.user.jid
        : m.sender;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);

    if (command == "tools") {
      let pp = fs.readFileSync('./src/img-cmds/tools.png')
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
try{
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
} catch {

}
    }
    if (command == "audio") {
      let pp = fs.readFileSync('./src/img-cmds/audio.png')
      let str = `
      ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐔𝐃𝐈𝐎╭──╯
   
┌── *AUDIOS* 🔊
├ *Quien es tu sempai botsito 7w7*
├ *Te diagnostico con gay*
├ *A nadie le importa*
├ *Fiesta del admin*
├ *Fiesta del administrador *
├ *Vivan los novios*
├ *Feliz cumpleaños*
├ *Noche de paz*
├ *Buenos dias*
├ *Buenos tardes*
├ *Buenos noches*
├ *Audio hentai*
├ *Chica lgante*
├ *Feliz navidad*
├ *Vete a la vrg*
├ *Pasa pack Bot*
├ *Atencion grupo*
├ *Marica quien*
├ *Murio el grupo*
├ *Oh me vengo*
├ *tio que rico*
├ *Viernes*
├ *Baneado*
├ *Sexo*
├ *Hola*
├ *Un pato*
├ *Nyanpasu*
├ *Te amo*
├ *Yamete*
├ *Bañate*
├ *Es puto*
├ *La biblia*
├ *Onichan*
├ *Mierda de Bot*
├ *Siuuu*
├ *Epico*
├ *Shitpost*
├ *Rawr*
├ *UwU*
├ *:c*
├ *a*
└ *Escribe las siguientes frases o palabras sin prefijo (/)*
${readMore}`
.trim();
   try{
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
  } catch {

  }
    }
    if (command == "down") {
      let pp = fs.readFileSync('./src/img-cmds/down.png')
      let str = `
  ╰─╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐒╭─╯
    
┌── *YOUTUBE* 
├ */ytmp3* - _<enlace>_
├ */ytmp4* - _<enlace>_
├ */ytmp3doc* - _<enlace>_
└ */ytmp4doc* - _<enlace>_
┌── *INSTAGRAM* 
├ */instagram* - _<enlace>_
├ */instagram2* - _<enlace>_
├ */instagram3* - _<enlace>_
├ */igstalk* - _<username>_
└ */igstory* - _<username>_
┌── *FACEBOOK* 
├ */fb* - _<enlace>_
├ */fb2* - _<enlace>_
├ */fb3* - _<enlace>_
├ */fb4* - _<enlace>_
└ */fb5* - _<enlace>_
┌── *PICTURE* 
├ */wallpaper* - _<texto>_
├ */wallpaper2* - _<texto>_
└ */imagen* - _<texto>_
┌── *SEARCH INFO MEDIA* 
├ */play* - _<texto>_
├ */play.1* - _<texto>_
├ */play.2* - _<texto>_
├ */playdoc* - _<texto>_
├ */playlist* - _<texto>_
└ */playlist2* - _<texto>_
┌── *MEDIAFIRE*
└ */mediafire* - _<enlace>_
┌── *GITHUB*
└ */gitclone* - _<enlace>_
┌── *GOOGLE DRIVE(share)*
└ */gdrive* - _<enlace>_

${readMore}
┌── *TIKTOK*
├ */tiktokstalk* - _<username>_
└ */tiktok* - _<enlace>_
┌── *TWITTER*
└ */twitter* - _<enlace>_
┌── *APKS (rexdl.com)*
└ */dapk2* - _<enlace>_
┌── *STICKER (getstickerpack.com)
├ */stickerly* - _<texto>_
└ */stickerpack* - _<enlace>_
┌── *SPOTIFY*
└  */spotify* - _<texto>_ 
┌── *MUSICA*
└  */soundcloud* - _<texto>_
┌── *WEBSITES +18*
├ */xnxxdl* - _<enlace>_
└ */xvideosdl* - _<enlace>_
`.trim();
   try{
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
  } catch {

  }
    }
    if (command == "media") {
      let pp = fs.readFileSync('./src/img-cmds/media.png')
      let str = `
      ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐌𝐄𝐃𝐈𝐀╭──╯
   
   ┌── *MULTIMEDIA* 🎴
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
   try{
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
  } catch {

  }
    }
    if (command == "edit") {
      let pp = fs.readFileSync('./src/img-cmds/edit.png')
      let str = `
      ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐆𝐑𝐎𝐔𝐏𝐒╭──╯
   
   ┌── *EFECTOS Y LOGOS* 🖍️
   ├ */phmaker* - <opcion> <imagen>
   ├ */logos* - <efecto> <texto>
   ├ */logochristmas* - <texto>
   ├ */logocorazon* - <texto>
   ├ */ytcomment* - <texto>
   ├ */hornycard* - <@tag>
   ├ */simpcard* - <@tag>
   ├ */lolice* - <@tag>
   ├ */itssostupid*
   ├ */pixelar*
   └ */blur*
   ┌── *EFECTOS DE AUDIO* 🎤
   ├ */bass*
   ├ */blown*
   ├ */deep*
   ├ */earrape*
   ├ */fast*
   ├ */fat*
   ├ */nightcore*
   ├ */reverse*
   ├ */robot*
   ├ */slow*
   ├ */smooth*
   ├ */tupai* 
   └ 𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚞𝚗 𝚊𝚞𝚍𝚒𝚘 𝚘 𝚗𝚘𝚝𝚊 𝚍𝚎 𝚟𝚘𝚣

   ${readMore}
   ┌── *CONVERTIR MULTIMEDIA* 🖍️
   ├ */togifaud* - _<video>_
   ├ */toimg* - _<sticker>_
   ├ */tomp3* - _<video>_
   ├ */tomp3* - _<nota de voz>_
   ├ */toptt* - _<video / audio>_
   ├ */tovideo* - _<sticker>_
   ├ */tourl* - _<video / imagen / audio>_
   └ */tts* - _<es> <texto>_
   `.trim();
try{
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
} catch {

}
    }
    if (command == "grupos") {
      let pp = fs.readFileSync('./src/img-cmds/grupos.png')
      let str = `
      ╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐆𝐑𝐎𝐔𝐏𝐒╭──╯
    
    ┌── *GRUPOS* 💎
    ├ *admins* - _<texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
    ├ */add* - _<numero>_
    ├ */kick* - _<@tag>_
    ├ */kick2* - _<@tag>_
    ├ */listanum* - _<texto>_
    ├ */kicknum* - _<texto>_
    ├ */grupo* - _<abrir / cerrar>_
    ├ */grouptime* - _<opcion> <tiempo>_
    ├ */promote* - _<@tag>_
    ├ */demote* - _<@tag>_
    ├ */demote* - _<@tag>_
    ├ */setname* - _<texto>_
    ├ */setdesc* - _<texto>_
    ├ */invocar* - _<texto>_
    ├ */setwelcome* - _<texto>_
    ├ */setbye* - _<texto>_
    ├ */hidetag* - _<texto>_
    ├ */warn* - _<@tag>_
    ├ */unwarn* - _<@tag>_
    ├ */setpp* - _<imagen>_
    ├ */infogroup*
    ├ */resetlink*
    ├ */link*
    ├ */listwarn*
    ├ */fantasmas*
    └ */destraba*
    ${readMore}
    ┌── *SETTINGS*
    ├ */enable* - _welcome_
    ├ */disable* - _welcome_
    ├ */enable* - _modohorny_
    ├ */disable* - _modohorny_
    ├ */enable* - _antilink_
    ├ */disable* - _antilink_
    ├ */enable* - _antilink2_
    ├ */disable* - _antilink2_
    ├ */enable* - _detect_
    ├ */disable* - _detect_
    ├ */enable* - _audios_
    ├ */disable* - _audios_
    ├ */enable* - _autosticker_
    ├ */disable* - _autosticker_
    ├ */enable* - _antiviewonce_
    ├ */disable* -antiviewonce_
    ├ */enable* - _antitoxic_
    ├ */disable* - _antitoxic_
    ├ */enable* - _antitraba_
    ├ */disable* - _antitraba_
    ├ */enable* - _antiarabes_
    ├ */disable* - _antiarabes_
    ├ */enable* - _modoadmin_
    └ */disable* - _modoadmin_
    `.trim();
try{
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
} catch {

}
    }
    if (command == "cmd18") {
      let pp = fs.readFileSync('./src/img-cmds/+18.png')
      let str = `
╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 +𝟏𝟖╭──╯

┌── *COMANDOS +18* 🔞
├ */pack*
├ */pack2*
├ */pack3*
├ */videoxxx*
├ */videolesbixxx*
├ */tiktokxxx*
├ */tetas*
├ */booty*
├ */ecchi*
├ */furro*
├ */imagenlesbians*
├ */panties*
├ */pene*
├ */porno*
├ */randomxxx*
├ */pechos*
├ */yaoi*
├ */yaoi2*
├ */yuri*
├ */yuri2*
├ */trapito*
├ */hentai*
├ */nsfwloli*
├ */nsfworgy*
├ */nsfwfoot*
├ */nsfwass*
├ */nsfwbdsm*
├ */nsfwcum*
├ */nsfwero*
├ */nsfwfemdom*
├ */nsfwglass*
└ */hentaipdf* - _<texto>_
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "games") {
      let pp = fs.readFileSync('./src/img-cmds/games.png')
      let str = `
╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐆𝐀𝐌𝐄𝐒╭──╯

┌── *JUEGOS* 🎮
├ */ppt* - _<papel / tijera /piedra>_
├ */prostituto* - _<nombre / @tag>_
├ */prostituta* - _<nombre / @tag>_
├ */gay2* - _<nombre / @tag>_
├ */lesbiana* - _<nombre / @tag>_
├ */pajero* - _<nombre / @tag>_
├ */pajera* - _<nombre / @tag>_
├ */puto* - _<nombre / @tag>_
├ */puta* - _<nombre / @tag>_
├ */manco* - _<nombre / @tag>_
├ */manca* - _<nombre / @tag>_
├ */rata* - _<nombre / @tag>_
├ */love* - _<nombre / @tag>_
├ */doxear* - _<nombre / @tag>_
├ */pregunta* - _<texto>_
├ */suitpvp* - _<@tag>_
├ */slot* - _<apuesta>_
├ */ttt* - _<nombre sala>_
├ */simi* - _<texto>_
├ */top* - _<texto>_
├ */delttt*
├ */topgays*
├ */topotakus*
├ */formarpareja*
├ */verdad*
├ */reto*
├ */cancion*
├ */pista*
└ */mates* - _<noob / easy / medium / hard / extreme /impossible /impossible2>_
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "admin") {
      let pp = fs.readFileSync('./src/img-cmds/admin.png')
      let str = `
╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐀𝐃𝐌𝐈𝐍╭──╯

┌── *ADMIN O OWNER* 👑
├ */setprefix* <prefijo>
├ */resetprefix*
├ */autoadmin*
├ */leavegc*
├ */cajafuerte*
├ */blocklist*
├ */block* <@tag / numero>
├ */unblock* <@tag / numero>
├ */enable* restrict
├ */disable* restrict
├ */enable* autoread
├ */disable* autoread
├ */enable* public
├ */disable* public
├ */enable* pconly
├ */disable* pconly
├ */enable* gconly
├ */disable* gconly
├ */enable* anticall
├ */disable* anticall
├ */enable* antiprivado
├ */disable* antiprivado
├ */enable* modejadibot
├ */disable* modejadibot
├ */msg* <texto>
├ */banchat*
├ */unbanchat*
├ */banuser* <@tag>
├ */unbanuser* <@tag>
├ */dardiamantes* <@tag>
├ */añadirxp* <@tag>
├ */banuser* <@tag>
├ */bc* <texto>
├ */bcchats* <texto>
├ */bcgc* <texto>
├ */bcbot* <texto>
├ */cleartpm*
├ */restart*
├ */update*
├ */banlist*
├ */addprem* <@tag>
├ */delprem* <@tag>
├ */listprem*
├ */listcmd*
├ */setppbot* <responder a imagen>
├ */addcmd* <texto> <responder a sticker/imagen>
├ */delcmd* <responder a sticker/imagen con comando o texto asignado>
├ *> <funcion>*
├ *=> <funcion>*
└ *$ <funcion>*
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "about") {
      let pp = fs.readFileSync('./src/img-cmds/about.png')
      let str = `
╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐈𝐍𝐅𝐎╭──╯

┌── *ABOUT THIS BOT* 🤖
├ */estado*
├ */infobot*
├ */speedtest*
├ */donar*
├ */grouplist*
├ */owner*
├ */script*
├ */serbot*
├ */stop*
├ */join* - _<enlace>_
├ */reporte* - _<texto>_
└ */bots* 
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "killchat") {
      let pp = fs.readFileSync('./src/img-cmds/kill.png')
      let str = `
╰──╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐊𝐈𝐋𝐋╭──╯

┌── *CRASH ANY WHATSAPP* 💀
├ */crash𝟷*
├ */crash2*
├ */crash3*
├ */crash4*
├ */crash5*
├ */crash6*
├ */crash7*
└ */crash8*
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "buscar") {
      let pp = fs.readFileSync('./src/img-cmds/search.png')
      let str = `
╰─╮𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐒𝐄𝐀𝐑𝐂𝐇╭─╯

┌── *BUSQUEDA ONLINE* 🔍
├ */modapk* - _<texto>_
├ */stickersearch* - _<texto>_
├ */stickersearch2* - _<texto>_
├ */xnxxsearch* - _<texto>_
├ */animeinfo* - _<texto>_
├ */google* - _<texto>_
├ */letra* - _<texto>_
├ */wikipedia* - _<texto>_
├ */ytsearch* - _<texto>_
└ */playstore* - _<texto>_

${readMore}
`.trim();
try{
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
} catch {

}
    }
  } catch (e) {
    console.error(e)
  }
};
handler.command = ["buscar","audio", "tools","down","media","edit","grupos","cmd18","games","admin","about","killchat"];
export default handler;
