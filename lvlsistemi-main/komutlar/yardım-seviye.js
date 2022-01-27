const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField('**Seviye Komutları Özel Mesajlarda Kullanılamaz!**')
        return message.author.send(ozelmesajuyari); }
    const NARCOSEMBED = new Discord.MessageEmbed()
    .setAuthor("Seviye || Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLUE")
  .setDescription(`:white_check_mark: **| Kadirus Code - Kadir Özçat Tarafından Yapılmıştır!**

  :white_check_mark: Yetkili Komutları:
  
> :white_check_mark: **| \`!seviye-ayarlar\` ➔ Seviye Ayarlarını Gösterir.**
> :white_check_mark: **| \`!seviye-xp\` ➔ Mesaj Başına Gelen XP Yi Ayarlarsınız.**
> :white_check_mark:**| \`!seviye-sınır\` ➔ Max Seviyeyi Ayarlarsınız.**
> :white_check_mark: **| \`!seviye-sıfırla\` ➔ Seviye Ayarlarını Sıfırlarsınız.**
> :white_check_mark: **| \`!seviye-log\` ➔ Seviye Logunu Ayarlarlarsınız.**
> :white_check_mark: **| \`!seviye-rol\` ➔ Seviye Rollerini Sıfırlarsınız.**

  :white_check_mark: Kullanıcı Komutları:

> :white_check_mark: **| \`!seviyem\` ➔ Seviyene Bakarsın.**
> :white_check_mark: **| \`!seviye-top\` ➔ Seviye Sıralamasındaki İlk 5 İ Gösterir.**  

  `)   

  message.channel.send(NARCOSEMBED)

}else {

}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım', 
  description: '',
  usage: ''
};
