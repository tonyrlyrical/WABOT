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
โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โโโ *HERRAMIENTAS* ๐ ๏ธ
โ */spamwa* - _<numero|texto|cantidad>_
โ */tamaรฑo* - _<cantidad> <imagen / video>_
โ */clima* - _<paรญs> <ciudad>_
โ */encuesta* - _<Pregunta|Opcion1|Opcion2>_
โ */afk* - _<motivo>_
โ */ocr* - _<responde a imagen>_
โ */acortar* - _<enlace / link / url>_
โ */calc* - _<operacion math>_
โ */del* - _<mensaje>_
โ */whatmusic* - _<audio>_
โ */readqr* - _<imagen (QR)>_
โ */qrcode* - _<texto>_
โ */readmore* - _<texto1| texto2>_
โ */styletext* - _<texto>_
โ */traducir* - _<code> <texto>_
โ */nowa* - _<numero>_
โ */covid* - _<pais>_
โ */horario*
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "audio") {
      let pp = fs.readFileSync('./src/img-cmds/audio.png')
      let str = `
      โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ
   
โโโ *AUDIOS* ๐
โ *Quien es tu sempai botsito 7w7*
โ *Te diagnostico con gay*
โ *A nadie le importa*
โ *Fiesta del admin*
โ *Fiesta del administrador *
โ *Vivan los novios*
โ *Feliz cumpleaรฑos*
โ *Noche de paz*
โ *Buenos dias*
โ *Buenos tardes*
โ *Buenos noches*
โ *Audio hentai*
โ *Chica lgante*
โ *Feliz navidad*
โ *Vete a la vrg*
โ *Pasa pack Bot*
โ *Atencion grupo*
โ *Marica quien*
โ *Murio el grupo*
โ *Oh me vengo*
โ *tio que rico*
โ *Viernes*
โ *Baneado*
โ *Sexo*
โ *Hola*
โ *Un pato*
โ *Nyanpasu*
โ *Te amo*
โ *Yamete*
โ *Baรฑate*
โ *Es puto*
โ *La biblia*
โ *Onichan*
โ *Mierda de Bot*
โ *Siuuu*
โ *Epico*
โ *Shitpost*
โ *Rawr*
โ *UwU*
โ *:c*
โ *a*
โ *Escribe las siguientes frases o palabras sin prefijo (/)*
${readMore}`
.trim();
   try{
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
  } catch {

  }
    }
    if (command == "down") {
      let pp = fs.readFileSync('./src/img-cmds/down.png')
      let str = `
  โฐโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐โญโโฏ
    
โโโ *YOUTUBE* 
โ */ytmp3* - _<enlace>_
โ */ytmp4* - _<enlace>_
โ */ytmp3doc* - _<enlace>_
โ */ytmp4doc* - _<enlace>_
โโโ *INSTAGRAM* 
โ */instagram* - _<enlace>_
โ */instagram2* - _<enlace>_
โ */instagram3* - _<enlace>_
โ */igstalk* - _<username>_
โ */igstory* - _<username>_
โโโ *FACEBOOK* 
โ */fb* - _<enlace>_
โ */fb2* - _<enlace>_
โ */fb3* - _<enlace>_
โ */fb4* - _<enlace>_
โ */fb5* - _<enlace>_
โโโ *PICTURE* 
โ */wallpaper* - _<texto>_
โ */wallpaper2* - _<texto>_
โ */imagen* - _<texto>_
โโโ *SEARCH INFO MEDIA* 
โ */play* - _<texto>_
โ */play.1* - _<texto>_
โ */play.2* - _<texto>_
โ */playdoc* - _<texto>_
โ */playlist* - _<texto>_
โ */playlist2* - _<texto>_
โโโ *MEDIAFIRE*
โ */mediafire* - _<enlace>_
โโโ *GITHUB*
โ */gitclone* - _<enlace>_
โโโ *GOOGLE DRIVE(share)*
โ */gdrive* - _<enlace>_

${readMore}
โโโ *TIKTOK*
โ */tiktokstalk* - _<username>_
โ */tiktok* - _<enlace>_
โโโ *TWITTER*
โ */twitter* - _<enlace>_
โโโ *APKS (rexdl.com)*
โ */dapk2* - _<enlace>_
โโโ *STICKER (getstickerpack.com)
โ */stickerly* - _<texto>_
โ */stickerpack* - _<enlace>_
โโโ *SPOTIFY*
โ  */spotify* - _<texto>_ 
โโโ *MUSICA*
โ  */soundcloud* - _<texto>_
โโโ *WEBSITES +18*
โ */xnxxdl* - _<enlace>_
โ */xvideosdl* - _<enlace>_
`.trim();
   try{
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
  } catch {

  }
    }
    if (command == "media") {
      let pp = fs.readFileSync('./src/img-cmds/media.png')
      let str = `
      โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ
   
   โโโ *MULTIMEDIA* ๐ด
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
   try{
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
  } catch {

  }
    }
    if (command == "edit") {
      let pp = fs.readFileSync('./src/img-cmds/edit.png')
      let str = `
      โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐๐โญโโโฏ
   
   โโโ *EFECTOS Y LOGOS* ๐๏ธ
   โ */phmaker* - <opcion> <imagen>
   โ */logos* - <efecto> <texto>
   โ */logochristmas* - <texto>
   โ */logocorazon* - <texto>
   โ */ytcomment* - <texto>
   โ */hornycard* - <@tag>
   โ */simpcard* - <@tag>
   โ */lolice* - <@tag>
   โ */itssostupid*
   โ */pixelar*
   โ */blur*
   โโโ *EFECTOS DE AUDIO* ๐ค
   โ */bass*
   โ */blown*
   โ */deep*
   โ */earrape*
   โ */fast*
   โ */fat*
   โ */nightcore*
   โ */reverse*
   โ */robot*
   โ */slow*
   โ */smooth*
   โ */tupai* 
   โ ๐๐๐๐๐๐๐๐ ๐ ๐๐ ๐๐๐๐๐ ๐ ๐๐๐๐ ๐๐ ๐๐๐ฃ

   ${readMore}
   โโโ *CONVERTIR MULTIMEDIA* ๐๏ธ
   โ */togifaud* - _<video>_
   โ */toimg* - _<sticker>_
   โ */tomp3* - _<video>_
   โ */tomp3* - _<nota de voz>_
   โ */toptt* - _<video / audio>_
   โ */tovideo* - _<sticker>_
   โ */tourl* - _<video / imagen / audio>_
   โ */tts* - _<es> <texto>_
   `.trim();
try{
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
} catch {

}
    }
    if (command == "grupos") {
      let pp = fs.readFileSync('./src/img-cmds/grupos.png')
      let str = `
      โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐๐โญโโโฏ
    
    โโโ *GRUPOS* ๐
    โ *admins* - _<texto> (๐ข๐ ๐ ๐ ๐๐ ๐๐๐๐๐๐๐)_
    โ */add* - _<numero>_
    โ */kick* - _<@tag>_
    โ */kick2* - _<@tag>_
    โ */listanum* - _<texto>_
    โ */kicknum* - _<texto>_
    โ */grupo* - _<abrir / cerrar>_
    โ */grouptime* - _<opcion> <tiempo>_
    โ */promote* - _<@tag>_
    โ */demote* - _<@tag>_
    โ */demote* - _<@tag>_
    โ */setname* - _<texto>_
    โ */setdesc* - _<texto>_
    โ */invocar* - _<texto>_
    โ */setwelcome* - _<texto>_
    โ */setbye* - _<texto>_
    โ */hidetag* - _<texto>_
    โ */warn* - _<@tag>_
    โ */unwarn* - _<@tag>_
    โ */setpp* - _<imagen>_
    โ */infogroup*
    โ */resetlink*
    โ */link*
    โ */listwarn*
    โ */fantasmas*
    โ */destraba*
    ${readMore}
    โโโ *SETTINGS*
    โ */enable* - _welcome_
    โ */disable* - _welcome_
    โ */enable* - _modohorny_
    โ */disable* - _modohorny_
    โ */enable* - _antilink_
    โ */disable* - _antilink_
    โ */enable* - _antilink2_
    โ */disable* - _antilink2_
    โ */enable* - _detect_
    โ */disable* - _detect_
    โ */enable* - _audios_
    โ */disable* - _audios_
    โ */enable* - _autosticker_
    โ */disable* - _autosticker_
    โ */enable* - _antiviewonce_
    โ */disable* -antiviewonce_
    โ */enable* - _antitoxic_
    โ */disable* - _antitoxic_
    โ */enable* - _antitraba_
    โ */disable* - _antitraba_
    โ */enable* - _antiarabes_
    โ */disable* - _antiarabes_
    โ */enable* - _modoadmin_
    โ */disable* - _modoadmin_
    `.trim();
try{
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
} catch {

}
    }
    if (command == "cmd18") {
      let pp = fs.readFileSync('./src/img-cmds/+18.png')
      let str = `
โฐโโโฎ๐๐๐๐๐๐๐ +๐๐โญโโโฏ

โโโ *COMANDOS +18* ๐
โ */pack*
โ */pack2*
โ */pack3*
โ */videoxxx*
โ */videolesbixxx*
โ */tiktokxxx*
โ */tetas*
โ */booty*
โ */ecchi*
โ */furro*
โ */imagenlesbians*
โ */panties*
โ */pene*
โ */porno*
โ */randomxxx*
โ */pechos*
โ */yaoi*
โ */yaoi2*
โ */yuri*
โ */yuri2*
โ */trapito*
โ */hentai*
โ */nsfwloli*
โ */nsfworgy*
โ */nsfwfoot*
โ */nsfwass*
โ */nsfwbdsm*
โ */nsfwcum*
โ */nsfwero*
โ */nsfwfemdom*
โ */nsfwglass*
โ */hentaipdf* - _<texto>_
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "games") {
      let pp = fs.readFileSync('./src/img-cmds/games.png')
      let str = `
โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โโโ *JUEGOS* ๐ฎ
โ */ppt* - _<papel / tijera /piedra>_
โ */prostituto* - _<nombre / @tag>_
โ */prostituta* - _<nombre / @tag>_
โ */gay2* - _<nombre / @tag>_
โ */lesbiana* - _<nombre / @tag>_
โ */pajero* - _<nombre / @tag>_
โ */pajera* - _<nombre / @tag>_
โ */puto* - _<nombre / @tag>_
โ */puta* - _<nombre / @tag>_
โ */manco* - _<nombre / @tag>_
โ */manca* - _<nombre / @tag>_
โ */rata* - _<nombre / @tag>_
โ */love* - _<nombre / @tag>_
โ */doxear* - _<nombre / @tag>_
โ */pregunta* - _<texto>_
โ */suitpvp* - _<@tag>_
โ */slot* - _<apuesta>_
โ */ttt* - _<nombre sala>_
โ */simi* - _<texto>_
โ */top* - _<texto>_
โ */delttt*
โ */topgays*
โ */topotakus*
โ */formarpareja*
โ */verdad*
โ */reto*
โ */cancion*
โ */pista*
โ */mates* - _<noob / easy / medium / hard / extreme /impossible /impossible2>_
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "admin") {
      let pp = fs.readFileSync('./src/img-cmds/admin.png')
      let str = `
โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐โญโโโฏ

โโโ *ADMIN O OWNER* ๐
โ */setprefix* <prefijo>
โ */resetprefix*
โ */autoadmin*
โ */leavegc*
โ */cajafuerte*
โ */blocklist*
โ */block* <@tag / numero>
โ */unblock* <@tag / numero>
โ */enable* restrict
โ */disable* restrict
โ */enable* autoread
โ */disable* autoread
โ */enable* public
โ */disable* public
โ */enable* pconly
โ */disable* pconly
โ */enable* gconly
โ */disable* gconly
โ */enable* anticall
โ */disable* anticall
โ */enable* antiprivado
โ */disable* antiprivado
โ */enable* modejadibot
โ */disable* modejadibot
โ */msg* <texto>
โ */banchat*
โ */unbanchat*
โ */banuser* <@tag>
โ */unbanuser* <@tag>
โ */dardiamantes* <@tag>
โ */aรฑadirxp* <@tag>
โ */banuser* <@tag>
โ */bc* <texto>
โ */bcchats* <texto>
โ */bcgc* <texto>
โ */bcbot* <texto>
โ */cleartpm*
โ */restart*
โ */update*
โ */banlist*
โ */addprem* <@tag>
โ */delprem* <@tag>
โ */listprem*
โ */listcmd*
โ */setppbot* <responder a imagen>
โ */addcmd* <texto> <responder a sticker/imagen>
โ */delcmd* <responder a sticker/imagen con comando o texto asignado>
โ *> <funcion>*
โ *=> <funcion>*
โ *$ <funcion>*
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "about") {
      let pp = fs.readFileSync('./src/img-cmds/about.png')
      let str = `
โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐โญโโโฏ

โโโ *ABOUT THIS BOT* ๐ค
โ */estado*
โ */infobot*
โ */speedtest*
โ */donar*
โ */grouplist*
โ */owner*
โ */script*
โ */serbot*
โ */stop*
โ */join* - _<enlace>_
โ */reporte* - _<texto>_
โ */bots* 
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "killchat") {
      let pp = fs.readFileSync('./src/img-cmds/kill.png')
      let str = `
โฐโโโฎ๐๐๐๐๐๐๐ ๐๐๐๐โญโโโฏ

โโโ *CRASH ANY WHATSAPP* ๐
โ */crash๐ท*
โ */crash2*
โ */crash3*
โ */crash4*
โ */crash5*
โ */crash6*
โ */crash7*
โ */crash8*
${readMore}
`.trim();
try{
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
} catch {

}
    }
    if (command == "buscar") {
      let pp = fs.readFileSync('./src/img-cmds/search.png')
      let str = `
โฐโโฎ๐๐๐๐๐๐๐ ๐๐๐๐๐๐โญโโฏ

โโโ *BUSQUEDA ONLINE* ๐
โ */modapk* - _<texto>_
โ */stickersearch* - _<texto>_
โ */stickersearch2* - _<texto>_
โ */xnxxsearch* - _<texto>_
โ */animeinfo* - _<texto>_
โ */google* - _<texto>_
โ */letra* - _<texto>_
โ */wikipedia* - _<texto>_
โ */ytsearch* - _<texto>_
โ */playstore* - _<texto>_

${readMore}
`.trim();
try{
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
} catch {

}
    }
  } catch (e) {
    console.error(e)
  }
};
handler.command = ["buscar","audio", "tools","down","media","edit","grupos","cmd18","games","admin","about","killchat"];
export default handler;
