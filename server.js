import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { redirect, webhook } from './routes';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/demoapp/redirect', redirect);
app.use('/demoapp/webhook', webhook);

//Create entry route
app.use('/', (req, res) =>
  res.json({
    message: 'Welcome to the Freshbooks Demo App',
  }),
);

const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;
try {
  app.listen(PORT, () => {
    console.log(`Server started on port --> ${PORT}...`);
  });
} catch (error) {
  console.log(error);
}
