import { invoke } from '@tauri-apps/api/tauri'
import { ref } from 'vue'
import { IConfigService } from '../interfaces'
import { kCommand, UserSettings, SystemInfo } from '../interfaces/type'

export const kDefaultSetting: UserSettings = {
  theme: 'dark',
  language: 'zh'
}

@IConfigService.bind
export class ConfigService implements IConfigService {
  private _systemInfo = ref<SystemInfo>({ total_memory: 0, cpu_count: 1 })
  private _settings = ref<UserSettings>(kDefaultSetting)
  constructor() {
    this._init()
  }
  private async _init() {
    const res = await invoke<SystemInfo>(kCommand.getSystemInfo)
    this._systemInfo.value = res
    console.warn(8888, res)
  }
  get searchHost() {
    return 'https://huggingface.co'
  }
  get estimatedRAM() {
    return this._systemInfo.value.total_memory / 1024 / 1024 / 1024
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
