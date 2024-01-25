export type RepositoryPayload<T> =
  | { method: 'create'; typeData: T }
  | { method: 'findOne'; typeData: string }

export interface Repository<T> {
  create(payload: RepositoryPayload<T>['typeData']): Promise<T>
  findAll(): Promise<T[]>
  findOne(payload: RepositoryPayload<T>['typeData']): Promise<T | null>
}
