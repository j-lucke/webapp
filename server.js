const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

if (process.argv[2] == 'x')
  dotenv.config();

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_CONFIG 
});

const app = express();

app.use((req, res, next) => {
  console.log(`aksin furr ${req.url}`)
  next()
})

app.use(express.static(path.join(__dirname, 'public')));


app.get('/test', (req, res) => {
  knex.select('first_name', 'last_name', 'current_count')
    .from('twitter_followers')
    .orderBy('current_count', 'desc', 'last')
    .then( (data) => {
      res.send(JSON.stringify(data));
    });
});

app.listen(3000, () => {console.log('listening on 3000...')} );