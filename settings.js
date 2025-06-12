const fs = require('fs')
const chalk = require('chalk')

//——————————[ Set Owner ]——————————//
global.ytname = "https://www.youtube.com/@ErerexIDChx" //gausah ganti 
global.location = "EVELYN USA" // ganti serah mu
global.ownername = "ErerexID Chx" // ganti nama mu
global.ownernumber = '62895342022385'  // ganti nomermu
global.email = "luwibuu100@gmail.com" // gmail.com

//——————————[ Set Bot ]——————————//
global.botname = 'Velyn Alexandria' // ganti serah mu
global.versi = '1.5'
global.foot = '© Velyn Alexandria' // Footer button
global.idSaluran = "120363204138641225@newsletter" // idch
global.namach = "Velyn Alexandria" // namach
global.aiUsageCount = global.aiUsageCount || {}; // jan kacau ha

//——————————[ APIs ]——————————//
global.VelynApi = "https://www.velyn.biz.id"
/**
 * apikey letakkan di bawah
*/
global.apiVel = "" //isi key mu di velyn.biz.id
global.apiKey = 'otp_LPiTqaYwoFMtWSQU'; 

//——————————[ Set Sticker ]——————————//
global.packname = 'Velyn Alexandria'
global.author = `ErerexID Chx`
global.themeemoji = '🪀'
global.wm = "Velyn Alexandria"
// Ganti terserah klean ini pack sticker

//——————————[ Set Link ]——————————//
global.link = "https://whatsapp.com/channel/0029VaKoIaj9cDDgB6N9u232" //linkch
global.namagc = "Velyn Alexandria" //nama grup
global.linkgc = "" //link gc
global.velynApi = "https://velyn.biz.id"
global.web = "https://www.velyn.biz.id" // website 
global.prefa = ['!','.','#','💐']

//——————————[ Set Payment ]——————————//
global.dana = "0895339369871" // Isi no dana mu
global.gopay = "0895339369871" // Isi no gopay mu
global.ovo = "0895339369871" // Isi no ovo mu
global.qris = "kosong" // pakai fitur .tourl untuk ubah foto ke link
global.an = {
  dana: "Kastik",
  gopay: "Kastik",
  ovo: "Kastik"
}

//——————————[ Media Url ]——————————//
global.imgthumb = "https://files.catbox.moe/7js2hf.jpg" //thumb menu
global.imgmenu = "https://files.catbox.moe/7js2hf.jpg" //thumb menu2
global.imgdoc = "https://files.catbox.moe/7js2hf.jpg" // Wajib ukuran 1280 × 450
global.logo = "https://files.catbox.moe/7js2hf.jpg" //logo toko
global.vidthumb = "https://files.catbox.moe/22w9jb.mp4" //gif menu
global.vn = "https://files.catbox.moe/0d9fni.mpeg" //music menu

//——————————[ Api Panel V1 ]——————————//
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://sydney.obscuraworks.com"
global.apikey = "ptla_miMYGnqBdF4r4AbgzxM9aVOlXri1gIptIBZSLS9UIn0" // Isi api ptla
global.capikey = "ptlc_MRsFfm5EXWQCRmmxjcDJsArMTDVEwdOQYE5ZXLF254K" // Isi api ptlc

//——————————[ Set Massage ]——————————//
global.mesg = {
  slr: "Fitur ini khusus reseller! Silahkan hubungi owner untuk membeli akses",
  pv: "*[ Warm System ]* Fitur ini khusus di private chat",
  gc: "*[ Warm System ]* Fitur ini khusus grup om—____—",
  own: "*[ Warm System ]* Sok asikk fitur ini khusus manusia tertamvan",
  adm: "*[ Warm System ]* Fitur ini khusus ateminnn",
  botadm: "[ NOTICE ] : promote velyn admin now!!",
  load: "bentar....",
  err: "Terjadi kesalahan, coba lagi suatu saat nanti..."
}
  

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})