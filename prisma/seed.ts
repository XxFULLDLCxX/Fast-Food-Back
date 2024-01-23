import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanDatabase(): Promise<void> {
  await prisma.orderAdditional.deleteMany({});
  await prisma.additional.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
}

const categoriesImages: { [key: string]: string } = {
  combos: 'https://th.bing.com/th/id/OIG.VjBCLyqdB2DSNyyFadj_?pid=ImgGn',
  acompanhamentos: 'https://th.bing.com/th/id/OIG.Um3FW29HQMFoYF4WXUSN?w=1024&h=1024&rs=1&pid=ImgDetMain',
  bebidas: 'https://th.bing.com/th/id/OIG.efJxOKqukNns.PrdEp02?w=1024&h=1024&rs=1&pid=ImgDetMain',
  sobremesas: 'https://th.bing.com/th/id/OIG.ZpoXvUt2aRXTQVHsW470?pid=ImgGn',
};

async function createCategories() {
  const categories = ['combos', 'acompanhamentos', 'bebidas', 'sobremesas'];
  return prisma.$transaction(
    categories.map((name) =>
      prisma.category.create({ data: { name, image: `https://fakeimg.pl/200x200/?text=Category&font=lobster` } })
    )
  );
}
async function createProducts(categoryName: string, categoryId: number, productsPerCategory: number) {
  return Promise.all(
    Array.from({ length: productsPerCategory }, (_, i) =>
      prisma.product.create({
        data: {
          name: `Produto ${i + 1}`,
          price: i * 100 + 1000,
          image: categoriesImages[categoryName],
          banner: '',
          teaser: `titulo visivel`,
          details: ` o detalhe que está ao selecionar, o test.`,
          categoryId: categoryId,
        },
      })
    )
  );
}
async function createAdditionals(productId: number, additionalsPerProduct: number) {
  return Promise.all(
    Array.from({ length: additionalsPerProduct }, (_, j) =>
      prisma.additional.create({
        data: {
          name: `adicional ${j + 1}`,
          price: 100,
          info: `detalhe ${j + 1}`,
          image: `https://fakeimg.pl/200x200/?text=Adicional&font=lobster`,
          productId,
        },
      })
    )
  );
}

async function main() {
  await cleanDatabase();
  await prisma.$transaction(async (_) => {
    const categories = await createCategories();
    console.log('Categories created:', categories);

    for (const category of categories) {
      const productsPerCategory = Math.floor(Math.random() * 5) * 4 + 4;
      const additionalsPerProduct = Math.floor(Math.random() * 6);

      const products = await createProducts(category.name, category.id, productsPerCategory);
      console.log(`Products created for category ${category.name}:`, products);

      for (const product of products) {
        await createAdditionals(product.id, additionalsPerProduct);
      }
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
