import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()

const port = process.env.PORT;
const app = express();
app.use(express.static('public'));

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/common');

const index = (req, res)=>{
  fileURLToPath(import.meta.url);
  if (req.url === '/index/'){
    res.redirect(301, "/");
    res.end();
  }
  res.write(import.meta.url + '\n');
  res.end(fileURLToPath(import.meta.url));
  // res.render('home');
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