import * as Color from 'color'
import scale from './scale'

interface Options {
  base: string
  light: {
    steps: number
    lighten?: number
    hueShift?: number
    saturate?: number
  }
  dark: {
    steps: number
    darken?: number
    hueShift?: number
    saturate?: number
  }
}

export function colorVariants({ base, light, dark: { darken = 1, ...dark } }: Options) {
  return [
    ...scale({ base, ...light }).reverse(),
    Color(base).hex(),
    ...scale({ base, lighten: -darken, ...dark }),
  ]
}

export default colorVariants
