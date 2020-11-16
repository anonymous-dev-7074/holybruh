const { ErelaClient, Utils } = require("erela.js");
module.exports = async(client) => {
  client.blacklisted.ensure(client.user.id, {
    blacklistedusers: []
  });
console.log(`${client.user.tag} is online!`)
  client.music = new ErelaClient(client, config.nodes);
  client.music.on("nodeConnect", node => console.log("New node connected"));
  client.music.on("nodeError", (node, error) =>
    console.log(`Node error: ${error.message}`)
  );
  client.music.on("trackStart", (player, track) => {
    const { thumbnail } = track;
    const embed = new discord.MessageEmbed()
      .addField(track.author, `**[${track.title}](${track.uri})**`)
      .addField("Duration", `${Utils.formatTime(track.duration, true)}`)
      .addField("Requested By", track.requester)
      .setFooter(player.voiceChannel.name)
      .setTimestamp()
      .setImage(
        `https://img.youtube.com/vi/${track.identifier}/maxresdefault.jpg`
      )
      .setColor("black");
    player.textChannel.send(embed);
}
