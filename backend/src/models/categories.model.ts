import { Pool, ResultSetHeader } from "mysql2/promise";
import { ICategories } from '../interfaces/categories';

export default class VehiclesModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ICategories[]> {
    const result = await this.connection.execute(`
      SELECT
        c.id,
        c.category,
        t.type
      FROM vhg_challenge.categories_vehicles AS c
      INNER JOIN vhg_challenge.types_vehicles AS t ON c.type_id = t.id;
    `);
    const [rows] = result;
    return rows as ICategories[];
  }
}
