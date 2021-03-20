import express from 'express';
import * as bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
 
app.use(bodyParser.json());


app.get('/', async (_req, res) => {
  const albums = await prisma.album.findMany();

  res.json({ albums });
})


const PORT = process.env.PORT || 4000
 
app.listen(PORT, () => console.log(`Running at: http://localhost:${PORT}`));
