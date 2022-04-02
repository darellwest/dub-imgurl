const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imguploader', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => console.log("connected."))
.catch(err => console.log(err))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// express.static('public');
//below line sets public follder to public
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});

// Here we divide modules according to different functions
app.use('/fileupload',  require('./routes/fileupload'));
app.use('/fileupload',  require('./routes/images'));
app.listen(3000, () => console.log('port 3000'));