import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from '@mui/material'
import ReviewList from '../ReviewList'
import UserRating from './UserRating'

const NovelDetails = () => {
  return (
    <Box>
      <Card sx={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ width: '30%' }}
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent sx={{ width: '70%' }}>
          <Typography
            variant="body2"
            color="text.secondary">
            무협,판타지
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            component="span"
            color="text.primary"
            fontWeight={700}>
            회귀수선전
          </Typography>
          <Divider sx={{ margin: '10px 0' }} />
          <Typography>
            지옥에서 올라온 절름발이 늑대, 이리초파랑.외로운 늑대의 1인 전쟁이
            시작된다.
          </Typography>
        </CardContent>
      </Card>
      <UserRating />
      <ReviewList />
    </Box>
  )
}

export default NovelDetails
