//js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/web'));




app.listen(PORT, console.log("Server Running At http://localhost:" + PORT))