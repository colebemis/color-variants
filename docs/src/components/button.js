import system from 'system-components'

const Button = system(
  {},
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  'color',
  'space',
)

Button.displayName = 'Button'

export default Button
