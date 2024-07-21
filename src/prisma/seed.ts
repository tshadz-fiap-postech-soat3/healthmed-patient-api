import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.patient.deleteMany();

  await prisma.patient.createMany({
    data: [
      {
        id: 1,
        name: 'Patient-1',
        email: 'patient.1@example.com',
        password: 'password-examples',
        address: 'address-1',
      },
      {
        id: 2,
        name: 'Patient-2',
        email: 'patient.2@example.com',
        password: 'password-examples',
        address: 'address-2',
      },
      {
        id: 3,
        name: 'Patient-3',
        email: 'patient.3@example.com',
        password: 'password-examples',
        address: 'address-3',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
