import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { artists } from './artistsSeed';

async function main() {
  for (let { name, albums } of artists) {
    await prisma.artist.create({
      data: {
        name,
        albums: {
          create: albums,
        },
      },
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
