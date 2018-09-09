import * as Color from 'color'

interface Options {
  base: string
  steps: number
  lighten?: number
  hueShift?: number
  saturate?: number
}

export function scale({ base, steps, lighten = 1, hueShift = 0, saturate = 0 }: Options) {
  if (steps !== parseInt(steps.toString(), 10) || steps < 0) {
    throw new Error('The "steps" argmuent must be an positive integer.')
  }

  if (typeof lighten !== 'number' || lighten > 1 || lighten < -1) {
    throw new Error('The "lighten" argument must be a number between 1 and -1.')
  }

  if (typeof hueShift !== 'number') {
    throw new Error('The "hueShift" argument must be a number.')
  }

  if (typeof saturate !== 'number' || saturate > 1 || saturate < -1) {
    throw new Error('The "saturate" argument must be a number between 1 and -1.')
  }

  const color = Color(base)
  const colors = []

  for (let step = 1; step <= steps; step++) {
    const mixinColor = Color(lighten > 0 ? 'white' : 'black')
    colors.push(
      color
        .rotate((hueShift * step) / steps)
        .saturate((saturate * step) / steps)
        .mix(mixinColor, (Math.abs(lighten) * step) / steps)
        .hex()
    )
  }

  return colors
}

export default scale
