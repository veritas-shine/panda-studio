import { invoke } from '@tauri-apps/api/tauri'
import { ref } from 'vue'
import { IConfigService } from '../interfaces'
import { kCommand } from '../interfaces/type'

@IConfigService.bind
export class ConfigService implements IConfigService {
  private _totalMemory = ref(0)
  constructor() {
    this._init()
  }
  private async _init() {
    const res = await invoke<number>(kCommand.getSystemInfo)
    this._totalMemory.value = res
    console.warn(8888, res)
  }
  get searchHost() {
    return 'https://huggingface.co'
  }
  get estimatedRAM() {
    console.warn(7777, this._totalMemory.value, this._totalMemory.value / 1024 / 1024 / 1024)
    return this._totalMemory.value / 1024 / 1024 / 1024
  }
}
