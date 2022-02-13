import express from 'express';

const app = express();

app.use(express.static('build'));//build파일 접근 허용

app.get('/', function (req,res) {
    res.sendFile(__dirname + '/build/index.html');//__dirname은 루트경로알려주는것?
});

app.listen(3000, () => {
    console.log('server is running...');
});