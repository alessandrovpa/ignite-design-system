import { stitchesConfig } from './styles/indes';

export const Button = stitchesConfig.styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$sm',
  padding: '$2 $4',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  '&:not(:disabled):hover': {
    cursor: 'pointer',
    background: '$ignite500',
    transition: '0.2s',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
});
