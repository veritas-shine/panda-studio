import { ref } from 'vue'
import { IConfigService, ISearchService } from '../interfaces'
import { SearchItemInfo } from '../interfaces/type'

@ISearchService.bind
export default class SearchService implements ISearchService {
  private _configService: IConfigService
  private _modelInfo = ref<SearchItemInfo>({} as any)
  private _searchResult = ref<SearchItemInfo[]>([])
  private _currentDetail = ref<any>({})
  loading: boolean = false

  constructor(@IConfigService configService: IConfigService) {
    this._configService = configService
  }
  async searchModel(keyword: string, tag?: string) {
    this.loading = true
    const url = `${this._configService.searchHost}/api/models?search=${encodeURIComponent(keyword)}&full=true&library=gguf&${encodeURIComponent(tag ?? '')}`
    const response = await fetch(url)
    const result = await response.json()
    this.loading = false
    this._searchResult.value = result
    return result
  }
  setCurrentModel(info: SearchItemInfo) {
    this._modelInfo.value = info
    this.getModelInfo(info.id)
  }
  get searchResult() {
    return this._searchResult.value
  }
  get selectedSearchItem() {
    return this._modelInfo.value
  }
  async getModelInfo(id: string) {
    const url = `${this._configService.searchHost}/api/models/${id}`
    const response = await fetch(url)
    const result = await response.json()
    console.warn(88888, result)
    this._currentDetail.value = result
  }
  get currentModelDetail() {
    return this._currentDetail.value
  }
}
