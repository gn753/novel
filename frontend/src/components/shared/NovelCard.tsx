import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import { Link } from 'react-router-dom'
import { INovelItem } from '@/api/types/novels.interface'

const NovelCard = ({ ...rest }: INovelItem) => {
  const { title, img, _id } = rest

  return (
    <Card sx={{ flex: '0 0 calc(33.33% - 8px)' }}>
      <Link to={`/novel/details/${_id}`}>
        <CardMedia
          sx={{ height: 188, width: 'inherit' }}
          image={img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="span"
            color="text.primary"
            fontWeight={700}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary">
            무협,판타지
          </Typography>
          <StarIcon sx={{ fontSize: '11px' }} />
        </CardContent>
      </Link>
    </Card>
  )
}

export default NovelCard
