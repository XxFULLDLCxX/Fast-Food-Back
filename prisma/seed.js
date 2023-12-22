import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = ['combo', 'acompanhamentos', 'bebidas', 'sobremesas'];
  const productsPerCategory = Math.floor(Math.random() * 5) * 4 + 4;
  const additionalsPerProduct = Math.floor(Math.random() * 6);

  const createCategoryWithProducts = async (categoryName) => {
    const category = await prisma.category.create({
      data: {
        name: categoryName,
        image: `https://fakeimg.pl/200x200/?text=Category&font=lobster`,
        products: {
          createMany: {
            data: Array.from({ length: productsPerCategory }, (_, i) => ({
              name: `Produto ${i + 1}`,
              price: `${i * 100 + 1000}`,
              image: `https://fakeimg.pl/200x200/?text=Adicional&font=lobster`,
              banner: `https://fakeimg.pl/500x200/?text=Banner&font=lobster`,
              info: `titulo visivel, o detalhe que está ao selecionar, o test.`,
              additionals: {
                createMany: {
                  data: Array.from({ length: additionalsPerProduct }, (_, j) => ({
                    name: `Adicional ${j + 1}`,
                    price: 100,
                    info: `detalhe ${j + 1}`,
                    image: `https://fakeimg.pl/200x200/?text=Adicional&font=lobster`,
                  })),
                },
              },
            })),
          },
        },
      },
    });

    return category;
  };

  await Promise.all(categories.map(createCategoryWithProducts));
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
