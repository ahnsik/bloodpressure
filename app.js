const express = require('express'); // express 모듈 추가하기
const path = require('path');

const app = express();
const port = 8088;

app.use(express.static('staticfiles'));

app.post('/new', function (request, response) {
    console.log('POST:'+request);
    response.send(':new/'+request );
});

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err) {
  console.log('Listening port:' + port);
  if (err) {
    return console.log('Found error', err);
  }
})
