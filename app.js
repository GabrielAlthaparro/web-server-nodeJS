require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;
app.use(express.static('public'));

// import path from 'path';
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/common');


// const index = (req, res)=>{
//   res.sendFile( __dirname + '/public/backup/index.html');
// };
// const generic = (req, res)=>{
//   res.sendFile( __dirname + '/public/backup/generic.html');
// };
// const elements = (req, res)=>{
//   res.sendFile( __dirname + '/public/backup/elements.html');
// };

const index = (req, res)=>{
  if (req.url === '/index/'){
    res.redirect(301, "/");
    res.end();
  }
  res.render('home');
};
const generic = (req, res)=>{
  if (req.url === '/generic/'){
    res.redirect(301, "/generic");
    res.end();
  }
  res.render('generic');
};
const elements = (req, res)=>{
  if (req.url === '/elements/'){
    res.redirect(301, "/elements");
    res.end();
  }
  res.render('elements');
};

app.get('/', index);
app.get('/index', index);
app.get('/index.html', index);

app.get('/generic', generic);
app.get('/generic.html', generic);

app.get('/elements', elements);
app.get('/elements.html', elements);

app.get('*', (req, res)=>{
  res.sendFile( __dirname + '/public/404.html');
})

app.listen(port);