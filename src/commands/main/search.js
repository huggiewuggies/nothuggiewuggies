const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const lds = require('../../schemas/lds');
const config = require('config');
const emojis = config.get('emojis');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("search")
    .setDescription("Searches for a verse")
    .addSubcommand((sc) =>
      sc
        .setName("verse")
        .setDescription("Searches for a verse")
        .addStringOption((option) =>
          option
            .setName("query")
            .setDescription("Finds the query specified inside the database.")
            .setRequired(true)
        )
    ),

  run: async ({ interaction, client }) => {
    const sOpt = interaction.options.getString('query');

    const verse = await lds.findOne({ verse_title: sOpt}).exec();

    if(verse) {
        const scripture_text = verse.scripture_text;
        
        const embed = new EmbedBuilder().setTitle(`${}`)
    } else {
        console.log(`No document found with the specified verse title`);
    }

  },
};
