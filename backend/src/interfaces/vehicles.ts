enum VehiclesTypes {
  car = 'carro',
  motorcycle = 'moto',
}

type VehiclesCategories = {
  carro: 'Compacto' | 'Sedan' | 'SUV' | 'Caminhonete';
  moto: 'Scooter' | 'Cidade' | 'Off - Road' | 'Sport';
};

export interface IVehicles {
  type: VehiclesTypes,
  category: VehiclesCategories,
  brand: string,
  model: string,
  color: string,
  plate: string,
  year: number,
}
