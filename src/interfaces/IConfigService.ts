import { createDecorator } from '../ioc/types'

export interface IConfigService {
  searchHost: string
  estimatedRAM: number
}

export const IConfigService = createDecorator<IConfigService>('IConfigService')
