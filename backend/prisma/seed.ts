import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const types = ['carro', 'moto'];

const categories = [
  {
    type: 1,
    category: 'Compacto',
  },
  {
    type: 1,
    category: 'Sedan',
  },
  {
    type: 1,
    category: 'SUV',
  },
  {
    type: 1,
    category: 'Caminhonete',
  },
  {
    type: 2,
    category: 'Scooter',
  },
  {
    type: 2,
    category: 'Cidade',
  },
  {
    type: 2,
    category: 'Off - Road',
  },
  {
    type: 2,
    category: 'Sport',
  },
];

const main = async () => {
  await Promise.all(types.map(async (type) => prisma.types_vehicles.create({ data: { type } })));
  await Promise.all(categories.map(async (i) => prisma.categories_vehicles.create({ data: { type_id: i.type, category: i.category } })));
};

main();
