const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.content === "!ping") {
    message.channel.send("Pong. ahah ");
  }
});

//  NEED VERIF ON VSC const prefix = "/";

// NEED VERIF ON VSC const fs =  require("json_ext001.json");

client.on("message", (message) => {
  if (message.content === "/hello") {
    message.channel.send("hey ! How are you ?");
  }
});

client.on("message", (message) => {
  if (message.content === "/json") {
    message.channel.send(
      "i am so sooory, but now, this page doesnt exist for the moment, comme back later"
    );
  }
});
client.on("message", (message) => {
  if (message.content === "/json") {
    message.channel.send("./core/extentions/jsonext.json");
  }
});
client.on("message", (message) => {
  if (message.content === "/versions") {
    message.channel.send("here you are : (bla,bla)");
  }
});
client.on("message", (msg) => {
  if (!msg.guild) return false;
  if (msg.author.bot) return false;

  var args = msg.content.split(" ");
  var mention = msg.mentions.users.first();
  var member = msg.guild.member(mention);
  var reason = args.slice(2).join(" ");
  var cmds = new Discord.Collection();
  const configs = require("./core/configs");

  if (
    cmds.get(args[0].slice(1)) !== undefined &&
    args[0].startsWith(configs.prefix)
  ) {
    cmds.get(args[0].slice(1)).run(client, msg, args, mention, member, reason);
  } else {
    return msg.reply("I don't know this command.");
  }
});
//ban
module.exports = {
  run(client, msg, args, mention, member, reason) {
    if (msg.member.hasPermission("BAN_MEMBERS")) {
      if (mention) {
        if (member) {
          if (reason) {
            member.ban({
              reason: reason
            });
          } else {
            member.ban({
              reason: "no specify reason."
            });
          }
        } else {
          return msg.reply("this user is not present in the guild.");
        }
      } else {
        return msg.reply("please mention a user.");
      }
    } else {
      return msg.reply("you didnt have the permition to execute this command.");
    }
  }
};

client.login("token");
