import scale from '../scale'

it('handles hex color values', () => {
  expect(scale({ base: '#ffaaaa', steps: 4 })).toMatchSnapshot()
})

it('handles rgb color values', () => {
  expect(scale({ base: 'rgb(0, 0, 255)', steps: 4 })).toMatchSnapshot()
})

it('handles hsl color values', () => {
  expect(scale({ base: 'hsl(0, 100%, 50%)', steps: 4 })).toMatchSnapshot()
})

it('handles color names', () => {
  expect(scale({ base: 'red', steps: 4 })).toMatchSnapshot()
})

it('handles positive "lighten" values', () => {
  expect(
    scale({ base: '#f00', steps: 4, lighten: 0.5, hueShift: 20, saturate: -0.5 })
  ).toMatchSnapshot()
})

it('handles negative "lighten" values', () => {
  expect(
    scale({ base: '#f00', steps: 4, lighten: -0.5, hueShift: 20, saturate: 0.5 })
  ).toMatchSnapshot()
})

it('throws if "base" is an invalid color value', () => {
  expect(() => scale({ base: 'foo', steps: 4 })).toThrowErrorMatchingSnapshot()
})

it('throws if "steps" is not an integer', () => {
  expect(() => scale({ base: '#f00', steps: 0.5 })).toThrowErrorMatchingSnapshot()
})

it('throws if "steps" is less than 0', () => {
  expect(() => scale({ base: '#f00', steps: -1 })).toThrowErrorMatchingSnapshot()
})

it('throws if "lighten" is greater than 1', () => {
  expect(() => scale({ base: '#f00', steps: 4, lighten: 2 })).toThrowErrorMatchingSnapshot()
})

it('throws if "lighten" is less than -1', () => {
  expect(() => scale({ base: '#f00', steps: 4, lighten: -2 })).toThrowErrorMatchingSnapshot()
})

it('throws if "saturate" is greater than 1', () => {
  expect(() => scale({ base: '#f00', steps: 4, saturate: 2 })).toThrowErrorMatchingSnapshot()
})

it('throws if "saturate" is less than -1', () => {
  expect(() => scale({ base: '#f00', steps: 4, saturate: -2 })).toThrowErrorMatchingSnapshot()
})
