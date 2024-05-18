import { Box } from '@mui/material'
import PostCard from '../shared/PostCard'

const PostList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '8px 0'
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
        <PostCard key={item} />
      ))}
    </Box>
  )
}

export default PostList
