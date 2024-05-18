import { useState } from 'react'
import { Card, CardContent, CardHeader, Divider, Rating } from '@mui/material'
const UserRating = () => {
  const [value, setValue] = useState<number | null>(0)
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
