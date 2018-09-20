import system from '@rebass/components'

const TextInput = system(
  {
    is: 'input',
    px: 4,
    py: 3,
    fontSize: 2,
    border: '1px solid',
    borderColor: 'lightgray',
    borderRadius: 1
  },
  {
    appearance: 'none',
    outline: 0,

    '&:focus': {
      borderColor: 'black'
    }
  },
  'space',
  'width',
  'fontSize',
  'border',
  'borderColor',
  'borderRadius'
)

TextInput.displayName = 'TextInput'

export default TextInput
