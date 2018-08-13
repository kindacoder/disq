const express = require('express');
const app = express();
//setting the view enine
app.set('view engine', 'ejs');
///serving static files
app.use('/public', express.static('public'));
// app.get('/', (req, res) => {
//     res.render('index');
// })
app.listen(4000, () => {
    console.log('server started at port 4000');
})