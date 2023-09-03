require("dotenv").config();

const { CommandKit } = require("commandkit");
const { Client, IntentsBitField } = require("discord.js");
const mongoose = require('mongoose');
const path = require("path");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

async function run() {
  try {
    await mongoose.connect(process.env.LOC_URI);
    console.log(`Connected to local MongoDB.`); 

    new CommandKit({
      client,
      commandsPath: path.join(__dirname, "commands"),
      eventsPath: path.join(__dirname, "events"),
      validationsPath: path.join(__dirname, "validations"),
      devRoleIds: ["1147520008650502236"],
      skipBuiltInValidations: true,
    });

    client.login(process.env.TOKEN);

  } catch (error) {
    console.log(error);
  }
}

run().catch(console.dir);