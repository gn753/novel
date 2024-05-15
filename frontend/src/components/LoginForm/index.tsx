import Input from '@/components/shared/Input'
import { Button as MButton, styled } from '@mui/material'

const LoginForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      userId: { value: string }
      password: { value: string }
    }
    const userId = target.userId.value // typechecks!
    const password = target.password.value // typechecks!

    console.log(userId, password)
  }

  return (
    <form onSubmit={onSubmit}>
      <Label>아이디</Label>
      <Input name="userId" />
      <Label>비밀번호</Label>
      <Input name="password" />
      <Button
        type="submit"
        sx={{ marginTop: '10px' }}>
        로그인
      </Button>
    </form>
  )
}

export default LoginForm

const Label = styled('label')`
  display: block;
  font-size: 13px;
  letter-spacing: 0.04em;
  font-weight: 400;
  margin-bottom: 4px;
  color: #777777;
  margin-bottom: 10px;
`
const Button = styled(MButton)`
  display: block;
  width: 100%;
  padding: 12px 18px;
  border-radius: 10px;
  background-color: #23d2e2;
  border-color: #23d2e2;
  font-size: 12px;
  font-weight: 600;
  color: black;
`
