import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ReviewCard from './ReviewCard'

const ReviewList = () => {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '20px' }}>
      <ReviewCard />
      <Divider
        variant="inset"
        component="li"
      />
    </List>
  )
}
export default ReviewList
