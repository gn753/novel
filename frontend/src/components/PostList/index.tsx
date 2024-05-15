import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
const PostList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '8px 0'
      }}>
      {[1, 2, 3, 4].map(item => (
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
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default PostList
