const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
    // const insertUser = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Rayhan Ahmed",
    //             email: "rayhan@gmail.com",
    //             age: 24,
    //             isMarried: false,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Arafat Hossain",
    //             email: "arafat@gmail.com",
    //             age: 27,
    //             isMarried: true,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Samiul Islam",
    //             email: "sami@gmail.com",
    //             age: 22,
    //             isMarried: false,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Nabil Khan",
    //             email: "nabil@gmail.com",
    //             age: 29,
    //             isMarried: true,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Hasan Mahmud",
    //             email: "hasan@gmail.com",
    //             age: 26,
    //             isMarried: false,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Sarah Johnson",
    //             email: "sarah@gmail.com",
    //             age: 31,
    //             isMarried: true,
    //             nationality: "American"
    //         },
    //         {
    //             name: "David Smith",
    //             email: "david@gmail.com",
    //             age: 35,
    //             isMarried: true,
    //             nationality: "British"
    //         },
    //         {
    //             name: "Aisha Rahman",
    //             email: "aisha@gmail.com",
    //             age: 23,
    //             isMarried: false,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Omar Faruk",
    //             email: "omar@gmail.com",
    //             age: 28,
    //             isMarried: false,
    //             nationality: "Bangladeshi"
    //         },
    //         {
    //             name: "Emily Clark",
    //             email: "emily@gmail.com",
    //             age: 25,
    //             isMarried: false,
    //             nationality: "Canadian"
    //         }
    //     ]

    // })

    const users = await prisma.user.findMany({
        where :{isMarried:true,age:{lte:20}}
    });
    console.log(users);


}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
    });