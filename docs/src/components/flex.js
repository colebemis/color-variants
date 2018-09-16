import system from 'system-components'
import Box from './box'

const Flex = system(
  {
    is: Box,
  },
  {
    display: 'flex',
  },
  'flexDirection',
  'alignItems',
  'justifyContent',
  'flexWrap'
)

Flex.displayName = 'Flex'

export default Flex
