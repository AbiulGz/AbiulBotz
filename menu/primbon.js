const a = '```'
const primbon = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *PRIMBON MENU* 」
┴
┠≽ *${prefix}apakah aku ganteng?*
┠≽ *${prefix}kapankah aku menikah?*
┠≽ *${prefix}bisakah aku memilikimu?*
┠≽ *${prefix}rate reply something*
┠≽ *${prefix}watak*
┠≽ *${prefix}hobby*
┠≽ *${prefix}gantengcek*
┠≽ *${prefix}cantikcek Iriene*
┠≽ *${prefix}persengay Topan*
┠≽ *${prefix}pbucin*
┠≽ *${prefix}mimpi Ular*
┠≽ *${prefix}artinama*
┠≽ *${prefix}pasangan Nama lu/Doi*
┠≽ *${prefix}tanggaljadian 13/02/2021*
┠≽ *${prefix}zodiak taurus*
┬
╰────────────────────────
` 
}
exports.primbon = primbon
