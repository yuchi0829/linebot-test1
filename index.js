var linebot = require('linebot');
var express = require('express');

var bot = linebot ({
	channelId: '1653300359',
	channelSecret: 'c17aedbfe09d8d21840d2cf4a1eac977',
	channelAccessToken: '9aYUjVwCvh8GE0JaqX4a8xzDtPHPMaoSxI03cF4emRi1Jvti4NptS9CvtRo4sIBgHwp0wQ+vhZtu2P6YdGJfAiDK4XHuUbIoKcpWuxh6HAvA/qucpGz+OmpyFnfPCbVLem2LrYe/3aTXQ+ZK91kGGwdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = `您輸入的是:${event.message.text}`;
  
    event.reply(msg).then(function(data) {
      
      console.log(msg);
    }).catch(function(error) {
      
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});



const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log('目前的port:', port);
});
