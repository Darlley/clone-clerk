import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('06775682158adminsaas', 10);
  
  // Criar usuário admin (seu usuário)
  const admin = await prisma.user.upsert({
    where: { email: 'darlleybrito@gmail.com' },
    update: {},
    create: {
      email: 'darlleybrito@gmail.com',
      name: 'Darlley',
      password: hashedPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  });
  
  const hashedPasswordAdmin = await bcrypt.hash('Teste@1234', 10);
  // Criar usuário de teste
  const testUser = await prisma.user.upsert({
    where: { email: 'admin@mail.com' },
    update: {},
    create: {
      email: 'admin@mail.com',
      name: 'Admin',
      password: hashedPasswordAdmin,
      role: 'USER',
      emailVerified: new Date(),
    },
  });

  console.log({ admin, testUser });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });