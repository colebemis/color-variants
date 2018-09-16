import system from 'system-components'
import Box from './box'

const Text = system(
  {
    is: Box,
    m: 0,
  },
  'fontFamily',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight',
  'letterSpacing'
)

Text.displayName = 'Text'

export default Text
