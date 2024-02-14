export interface Repository<T, D> {
  create(payload: D): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(elementId: D): Promise<T | null>;
}
