import { createDecorator } from '../ioc/types'
import { SearchItemInfo } from './type'
export interface ISearchService {
  searchModel(query: string, tag?: string): Promise<SearchItemInfo[]>
  setCurrentModel(info: SearchItemInfo): void
  getModelInfo(id: string): Promise<void>
}

export const ISearchService = createDecorator<ISearchService>('ISearchService')
