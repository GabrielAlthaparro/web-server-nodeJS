import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';

import { index, generic, elements } from './routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// variables de entorno
dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.static('public'));
// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/common');

// enrutamiento
app.get('/', index);
app.get('/index', index); // por aca entra la url '/index/'
app.get('/index.html', index);

app.get('/generic', generic); // por aca entra la url '/generic/'
app.get('/generic.html', generic);

app.get('/elements', elements); // por aca entra la url '/elements/'
app.get('/elements.html', elements);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
})

app.listen(port);