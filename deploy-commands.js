//Const

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId} = require('./config.json');
const token = process.env['token']


//Deployment Code
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
  	new SlashCommandBuilder().setName('embed').setDescription('Replies with embed'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
