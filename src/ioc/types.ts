import { interfaces, injectable, inject } from 'inversify'
import { container } from './container'

export const createDecorator = <T>(name: string) => {
  const type = Symbol.for(name)
  const decorator = (
    target: any,
    targetKey?: string | symbol | undefined,
    indexOrPropertyDescriptor?: any
  ) => {
    return inject(type)(target, targetKey, indexOrPropertyDescriptor)
  }
  decorator.bind = (cls: interfaces.Newable<T>) => {
    container.bind(type).to(injectable()(cls))
  }

  decorator.resolve = (): T => {
    return container.get<T>(type)
  }

  return decorator
}
