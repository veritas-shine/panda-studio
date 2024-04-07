import { invoke } from '@tauri-apps/api/tauri'
import { IConfigService } from '../interfaces'
import { kCommand } from '../interfaces/type'

@IConfigService.bind
export class ConfigService implements IConfigService {
  private _totalMemory: number
  constructor() {
    invoke(kCommand.getSystemInfo).then((res: number) => {
      console.warn(999, res)
      this._totalMemory = res
    })
  }
  get searchHost() {
    return 'https://huggingface.co'
  }
}
