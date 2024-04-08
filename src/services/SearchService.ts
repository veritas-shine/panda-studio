import { IConfigService, ISearchService } from '../interfaces'
import { SearchItemInfo } from '../interfaces/type'

@ISearchService.bind
export default class SearchService implements ISearchService {
  private _configService: IConfigService
  private _modelInfo?: SearchItemInfo

  constructor(@IConfigService configService: IConfigService) {
    this._configService = configService
  }
  async searchModel(keyword: string, tag?: string) {
    const url = `${this._configService.searchHost}/api/models?search=${encodeURIComponent(keyword)}&full=true&library=gguf&${encodeURIComponent(tag ?? '')}`
    const response = await fetch(url)
    const result = await response.json()
    console.warn(88888, result)
    return result
  }
  setCurrentModel(info: SearchItemInfo) {
    this._modelInfo = info
    this.getModelInfo(this._modelInfo!.id)
  }
  async getModelInfo(id: string) {
    const url = `${this._configService.searchHost}/api/models/${id}`
    const response = await fetch(url)
    const result = await response.json()
    console.warn(result)
  }
}
