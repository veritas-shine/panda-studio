import { IConfigService, ISearchService } from '../interfaces'

@ISearchService.bind
export default class SearchService implements ISearchService {
  private _configService: IConfigService
  constructor(@IConfigService configService: IConfigService) {
    this._configService = configService
  }
  async searchModel(keyword: string, tag: string) {
    const url = `${this._configService.searchHost}/api/models?search=${encodeURIComponent(keyword)}&full=true&library=gguf&${encodeURIComponent(tag ?? '')}`
    const response = await fetch(url)
    const result = await response.json()
    console.warn(88888, result)
  }
}
