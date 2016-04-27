var express = require('express');//載入express模組
var app = express();//初始化
app.use(express.static('public'));
app.listen(1337,function(){//設定ROUTER首頁的處理函式
	console.log('read on port 1337');
})