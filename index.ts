import express from 'express';
import * as bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
 
app.use(bodyParser.json());


app.get('/api', async (_req, res) => {
  const albums = await prisma.album.findMany();

  res.json({ albums });
});

app.post('/api/new_album', async (req, res) => {
  try {
    const { title, artistId } = req.body;
    if (!title || !artistId) {
      res.status(400).json({ error: "Missing title or artistId" })
      return;
    }

    const newAlbum = await prisma.album.create({
      data: {
        title,
        artist: {
          connect: { id: artistId },
        },
      },
    });

    res.status(200).json(newAlbum);
  } catch (e) {
    console.log(e); // Report to Error Service, ex: Airbrake
    res.status(400).json({ error: "Sorry, Unabel to create an album at the moment! Please try again later" });
  }
})


const PORT = process.env.PORT || 4000
 
app.listen(PORT, () => console.log(`Running at: http://localhost:${PORT}`));
