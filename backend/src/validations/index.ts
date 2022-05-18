export default class VehicleVerify {
  public static CODE_404 = 400;

  public static verifyCategory(category: string): boolean | object {
    return !category
      ? { code: this.CODE_404, message: 'Category not be empty' }
      : false;
  }

  public static verifyBrand(brand: string): boolean | object {
    return !brand
      ? { code: this.CODE_404, message: 'Brand not be empty' }
      : false;
  }

  public static verifyModel(model: string): boolean | object {
    return !model
      ? { code: this.CODE_404, message: 'Model not be empty' }
      : false;
  }

  public static verifyPlate(plate: string): boolean | object {
    return !plate
      ? { code: this.CODE_404, message: 'Plate not be empty' }
      : false;
  }

  public static verifyYear(year: string): boolean | object {
    return !year
      ? { code: this.CODE_404, message: 'Year not be empty' }
      : false;
  }

  public static verifyColor(color: string): boolean | object {
    return !color
      ? { code: this.CODE_404, message: 'Color not be empty' }
      : false;
  }

  public static validateVehicle(
    category: string,
    brand: string,
    model: string,
    plate: string,
    year: string,
    color: string,
  ): boolean | object {
    return (
      this.verifyCategory(category)
      || this.verifyBrand(brand)
      || this.verifyModel(model)
      || this.verifyPlate(plate)
      || this.verifyYear(year)
      || this.verifyColor(color)
    );
  }
}
