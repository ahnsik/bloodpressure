const express = require('express'); // express 모듈 추가하기
const path = require('path');

const app = express();

app.use(express.static('staticfiles'));
app.set ('port', process.env.PORT || 8088 );	// express 의 set 기능으로 접속 포트를 지정. default 로 8088 을 지정하지만, 환경 변수에 PORT 를 지정해 두면 그 값으로 포트를 변경할 수 있을 듯.

app.post('/new', function (request, response) {
    console.log('POST:'+request.body );
    response.send(':new/'+request );
});

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function(err) {	// port 변수는 const 로 정해서 썼던 것을 express 에 설정된 값을 읽어서 사용하도록 수정함. 
  console.log('Listening port:' + app.get('port') );
  if (err) {
    return console.log('Found error', err);
  }
})
