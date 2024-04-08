import { invoke } from '@tauri-apps/api/tauri'
import { ref } from 'vue'
import { IConfigService } from '../interfaces'
import { kCommand, UserSettings } from '../interfaces/type'

export const kDefaultSetting: UserSettings = {
  theme: 'dark',
  language: 'zh'
}

@IConfigService.bind
export class ConfigService implements IConfigService {
  private _totalMemory = ref(0)
  private _settings = ref<UserSettings>(kDefaultSetting)
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

  get settings() {
    return this._settings.value
  }
  updateSettings(settings: Partial<UserSettings>) {
    this._settings.value = {
      ...this._settings.value,
      ...settings
    }
  }
}
