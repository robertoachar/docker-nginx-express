const express = require('express');
const path = require('path');
const winston = require('winston');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const environment = {
    title: 'Docker with Nginx and Express',
    node: process.env.NODE_ENV,
    instance: process.env.INSTANCE,
    port: process.env.PORT
  };

  res.render('index', { environment });
});

app.listen(process.env.PORT, () => {
  winston.info(`NODE_ENV: ${process.env.NODE_ENV}`);
  winston.info(`INSTANCE: ${process.env.INSTANCE}`);
  winston.info(`EXPRESS: ${process.env.PORT}`);
});
