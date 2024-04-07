import { createDecorator } from '../ioc/types'

export interface IConfigService {
  searchHost: string
}

export const IConfigService = createDecorator<IConfigService>('IConfigService')
