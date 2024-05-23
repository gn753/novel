import { Box } from '@mui/material'
import PostCard from '../shared/PostCard'
import { getPostAll } from '@/api/posts'
import { useEffect, useState } from 'react'
import { IPostItem } from '@/api/types/posts.interface'

const PostList = () => {
  const [state, setState] = useState<IPostItem[]>([])

  useEffect(() => {
    getPostAll().then(res => setState(res))
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '8px 0'
      }}>
      {state.length > 0 && state.map(item => <PostCard {...item} />)}
    </Box>
  )
}

export default PostList
