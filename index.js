import express from 'express';

import 'dotenv/config';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on: http://localhost:${process.env.PORT}`);
});
