import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.author.deleteMany();
  const user = await prisma.author.create({
    //when generating new properties and ctrl + space doesn't work -> ctrl + rmk function
    data: {
      name: "Ruben",
    },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
