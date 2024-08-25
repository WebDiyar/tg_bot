const { Telegraf } = require('telegraf');
require('dotenv').config();
const http = require('http');

const TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(TOKEN);

const web_link = process.env.WEB_LINK;

// Bot logic
bot.start((ctx) => {
    ctx.reply('Welcome! Click the button below to open the web app:', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: 'Open Web App',
                        web_app: { url: web_link }
                    }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    });
});

bot.on('message', (ctx) => {
    if (ctx.message.text !== '/start') {
        ctx.reply('To get started, click the button below:', {
            reply_markup: {
                keyboard: [
                    [
                        {
                            text: 'Open Web App',
                            web_app: { url: web_link }
                        }
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard: true
            }
        });
    }
});

bot.launch();

// Create a simple HTTP server to keep the service alive and listen on a port
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running\n');
}).listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
