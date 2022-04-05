export const vehicleVerify = {
  create: (body: any): boolean => {
    const { category, brand, model, plate, year, color } = body;
    if(!category || !brand || !model || !plate || !year || !color) return true;
    return false;
  },
};
