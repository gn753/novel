import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'

const PostCard = () => {
  return (
    <Card sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
      <CardMedia
        sx={{ height: 188, width: 'inherit' }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="span"
          color="text.primary"
          fontWeight={700}>
          회귀수선전
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary">
          무협,판타지
        </Typography>
        <StarIcon sx={{ fontSize: '11px' }} />
      </CardContent>
    </Card>
  )
}

export default PostCard
