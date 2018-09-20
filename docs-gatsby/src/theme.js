export const breakpoints = ['32em', '48em', '64em', '80em']

export const space = [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512]

export const fonts = {
  sans: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Roboto"',
    '"Oxygen"',
    '"Ubuntu"',
    '"Cantarell"',
    '"Fira Sans"',
    '"Droid Sans"',
    '"Helvetica Neue"',
    'sans-serif',
  ].join(', '),
  monospace: ['"Roboto Mono"', '"SF Mono"', 'Menlo', 'monospace'].join(', '),
}

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64]

export const fontWeights = { normal: 400, bold: 600 }

export const lineHeights = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
}

export const radii = [0, 0]

export default {
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
}
