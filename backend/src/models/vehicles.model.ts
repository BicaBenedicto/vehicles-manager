import { Pool } from "mysql2/promise";
import { IVehicles } from '../interfaces/vehicles';

export default class VehiclesModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IVehicles[]> {
    const result = await this.connection.execute(`
      SELECT
        v.id,
        v.color,
        v.model,
        v.plate,
        v.year,
        vc.brand,
        tv.type
      FROM vhg_challenge.vehicles AS v
      INNER JOIN vhg_challenge.categories_vehicles AS vc ON v.brand_id = vc.id
      INNER JOIN vhg_challenge.types_vehicles AS tv ON vc.type_id = tv.id;
    `);
    const [rows] = result;
    return rows as IVehicles[];
  }
}
