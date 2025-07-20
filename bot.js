const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // استبدلها بـ IP السيرفر أو hostname
  port: 25565, // البورت
  username: 'GamesWorldBot' // اسم البوت
});

bot.on('login', () => {
  console.log('✅ البوت سجل دخول');
  bot.chat('مرحبا واهلا وسهلا بلاعبين سيرفر');

  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 5000);

  setInterval(() => {
    bot.chat('اشتركو بقناة Games World');
  }, 15000);
});

bot.on('spawn', () => {
  console.log('✨ البوت دخل العالم');
});
