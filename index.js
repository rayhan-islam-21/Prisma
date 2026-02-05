const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {

    const insertUser = await prisma.user.createMany({
        data: [
            { name: "Arafat", email: "arafat2@gmail.com" },
            { name: "Sami", email: "sami3@gmail.com" },
            { name: "Nabil", email: "nabil4@gmail.com" },
            { name: "Hasan", email: "hasan5@gmail.com" }
        ]
    })

    console.log(insertUser);

    const users = await prisma.user.findMany();
    console.log(users);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
    });