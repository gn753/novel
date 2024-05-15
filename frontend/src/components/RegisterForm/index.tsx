import Input from '@/components/shared/Input'
import InputLabel from '@/components/shared/InputLabel'
import { Button as MButton, styled } from '@mui/material'

const RegisterForm = () => {
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
      <InputLabel title="아이디" />
      <Input name="userId" />
      <InputLabel title="비밀번호" />
      <Input name="password" />
      <Button
        type="submit"
        sx={{ marginTop: '10px' }}>
        회원가입
      </Button>
    </form>
  )
}

export default RegisterForm

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
