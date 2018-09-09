import colorVariants from '../index'

it('returns expected array of colors', () => {
  expect(
    colorVariants({
      base: '#f00',
      light: { steps: 4, lighten: 0.9, hueShift: 20, saturate: -0.1 },
      dark: { steps: 2, darken: 0.5, hueShift: -10, saturate: 0.5 },
    })
  ).toMatchSnapshot()
})

it('assigns default values', () => {
  expect(
    colorVariants({
      base: '#f00',
      light: { steps: 4 },
      dark: { steps: 2 },
    })
  ).toMatchSnapshot()
})
