import { styled } from '@mui/material'

const InputLabel = ({ title }: { title: string }) => {
  return <SLabel>{title}</SLabel>
}

export default InputLabel

const SLabel = styled('label')`
  display: block;
  font-size: 13px;
  letter-spacing: 0.04em;
  font-weight: 400;
  margin-bottom: 4px;
  color: #777777;
  margin-bottom: 10px;
`
