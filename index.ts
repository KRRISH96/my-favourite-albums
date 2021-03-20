import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
 
app.use(bodyParser.json());


app.get('/', async (_req, res) => {
  res.json({ ok: true });
})


const PORT = process.env.PORT || 4000
 
app.listen(PORT, () => console.log(`Running at: http://localhost:${PORT}`));