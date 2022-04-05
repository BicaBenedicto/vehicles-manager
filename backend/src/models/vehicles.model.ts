import { Pool, ResultSetHeader } from "mysql2/promise";
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
        v.brand,
        vc.category,
        tv.type
      FROM vhg_challenge.vehicles AS v
      INNER JOIN vhg_challenge.categories_vehicles AS vc ON v.category_id = vc.id
      INNER JOIN vhg_challenge.types_vehicles AS tv ON vc.type_id = tv.id;
    `);
    const [rows] = result;
    return rows as IVehicles[];
  }

  public async getById(id: number): Promise<IVehicles> {
    const result = await this.connection.execute(`
      SELECT
        v.id,
        v.color,
        v.model,
        v.plate,
        v.year,
        v.brand,
        vc.category,
        tv.type
      FROM vhg_challenge.vehicles AS v
      INNER JOIN vhg_challenge.categories_vehicles AS vc ON v.category_id = vc.id
      INNER JOIN vhg_challenge.types_vehicles AS tv ON vc.type_id = tv.id
      WHERE v.id = (?);
    `, [id]);
    const [rows] = result;
    const [item] = rows as IVehicles[];
    return item as IVehicles;
  }

  public async remove(id: number): Promise<number> {
    const result = await this.connection.execute(`
      DELETE
      FROM vhg_challenge.vehicles AS v
      WHERE v.id = (?);
    `, [id]);
    const [rows] = result;
    const { affectedRows } = rows as ResultSetHeader;
    return affectedRows;
  }

  public async create(body: IVehicles): Promise<number> {
    const result = await this.connection.execute(`
      INSERT INTO vhg_challenge.vehicles (category_id, brand, model, color, plate, year)
      VALUES ((SELECT id FROM vhg_challenge.categories_vehicles WHERE category = ?), ?, ?, ?, ?, ?);
    `, [body.category, body.brand, body.model, body.color, body.plate, body.year]);
    const [rows] = result;
    const { insertId } = rows as ResultSetHeader;
    return insertId;
  }

  public async update(body: IVehicles, id: number): Promise<number> {
    const result = await this.connection.execute(`
      UPDATE vhg_challenge.vehicles
      SET
        category_id = (SELECT id FROM vhg_challenge.categories_vehicles WHERE category = (?)),
          model = (?),
          color = (?),
          plate = (?),
          year = (?),
          brand = (?)
      WHERE id = (?);
    `, [body.category, body.model, body.color, body.plate, body.year, body.brand, id]);
    const [rows] = result;
    const { affectedRows } = rows as ResultSetHeader;
    return affectedRows;
  }
}
