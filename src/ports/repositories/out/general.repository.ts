export type RepositoryPayload<D> =
  | { method: 'create'; typeData: D }
  | { method: 'findOne'; typeData: string }

export interface Repository<T, D> {
  create(payload: RepositoryPayload<D>['typeData']): Promise<T>
  findAll(): Promise<T[]>
  findOne(payload: RepositoryPayload<T>['typeData']): Promise<T | null>
}
