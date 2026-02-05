const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create a product
  const product = await prisma.product.create({
    data: { name: "Apple", price: 1.5 }
  })
  console.log("Created:", product)

  // Fetch all products
  const products = await prisma.product.findMany()
  console.log("All products:", products)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
