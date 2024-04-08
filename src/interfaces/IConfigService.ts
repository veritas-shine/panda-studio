import { createDecorator } from '../ioc/types'
import { UserSettings } from './type'

export interface IConfigService {
  searchHost: string
  estimatedRAM: number
  settings: UserSettings
  updateSettings(settings: Partial<UserSettings>): void
}

export const IConfigService = createDecorator<IConfigService>('IConfigService')
