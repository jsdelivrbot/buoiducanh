const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/q1', require('./q1'));
app.use('/q2', require('./q2'));
app.use('/q3', require('./q3'));
app.use('/q4', require('./q4'));
app.use('/q5', require('./q5'));
app.use('/q6', require('./q6'));
app.use('/q7', require('./q7'));
app.use('/q8', require('./q8'));
app.use('/q9', require('./q9'));
app.use('/q10', require('./q10'));
app.use('/q11', require('./q11'));
app.use('/q12', require('./q12'));
app.use('/q13', require('./q13'));
app.use('/q14', require('./q14'));
const template = fs.readFileSync('templates/index1.html', 'utf-8');


app.get('/', (req, res) => {
    res.send(template);
})
app.listen(app.get('port'), function() {
  console.log("Hello World");
});

