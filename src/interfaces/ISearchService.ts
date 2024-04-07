import { createDecorator } from '../ioc/types'

export interface ISearchService {
  searchModel(query: string, tag: string): Promise<void>
}

export const ISearchService = createDecorator<ISearchService>('ISearchService')
