require("dotenv").config();

const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

client.on("ready", () => {
  console.log("THE BOT IS READY TO GO :D");

  client.on("message", (msg) => {
    if (msg.content === "!quote") {
      fetch("http://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.content);
          msg.channel.send(`***"${data.content}"***    ~ ${data.author}`);
        })
        .catch((err) => console.log(err));
    }
  });
});

client.login(process.env.BOT_TOKEN);
