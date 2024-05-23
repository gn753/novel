import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, Divider, Rating } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useReviews } from '@/hooks/useReviews'
import { useAppSelector } from '@/store/hooks'
const UserRating = () => {
  const [value, setValue] = useState<number | null>(0)
  const user = useAppSelector(state => state.logins.user.userId)
  const { submitRating } = useReviews()
  const { id } = useParams<{ id: string }>()
  console.log(id, 'id')
  useEffect(() => {
    if (user) {
      submitRating(user, value)
    }
  }, [submitRating, user, value])

  return (
    <Card>
      <CardHeader title="평점" />
      <Divider />
      <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        />
      </CardContent>
    </Card>
  )
}

export default UserRating
