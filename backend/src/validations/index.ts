export const vehicleVerify = {
  create: (body: any): boolean | object => {
    const { category, brand, model, plate, year, color } = body;
    if(!category) return { code: 400, message: 'Category not be empty' };
    if(!brand) return { code: 400, message: 'Brand not be empty' };
    if(!model) return { code: 400, message: 'Model not be empty' };
    if(!plate) return { code: 400, message: 'Plate not be empty' };
    if(!year) return { code: 400, message: 'Year not be empty' };
    if(!color) return { code: 400, message: 'Color not be empty' };
    return false;
  },
};
