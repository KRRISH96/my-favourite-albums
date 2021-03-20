import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { artists } from './artistsSeed';

async function main() {
  const alice = await prisma.artist.create({
    data: {
      name: "TODO",
      albums: {
        create: {
          title: 'Check out Prisma with Next.js'
        },
      },
    },
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
