import { IConfigService } from '../interfaces'

@IConfigService.bind
export class ConfigService implements IConfigService {
  get searchHost() {
    return 'https://huggingface.co'
  }
}
