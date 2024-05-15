import { styled } from '@mui/material'
import TextField from '@mui/material/TextField/TextField'

const Input = ({ name }: { name: string }) => {
  return (
    <SInput
      hiddenLabel
      defaultValue=""
      size="small"
      name={name}
    />
  )
}

export default Input
const SInput = styled(TextField)`
  &.MuiFormControl-root {
    width: 100%;
  }
`
