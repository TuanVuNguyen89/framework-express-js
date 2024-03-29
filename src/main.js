const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

const route = require('./routes');

//console.log(path.join(__dirname, "public/img"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());
app.use(express.urlencoded());
// HTTP Logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));

// Route init
route(app);
//console.log("PATH: ", path.join(__dirname, "resources/views"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
