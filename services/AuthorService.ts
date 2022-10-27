import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function addAuthor(){
  await prisma.author.deleteMany();
  const user = await prisma.author.create({
    //when generating new properties and ctrl + space doesn't work -> ctrl + rmk function
    data: {
      name: "Brandon Sanderson",
      email: "brandon.sanderson@gmail.com",
    },
  });
  console.log(user);
}

addAuthor()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

