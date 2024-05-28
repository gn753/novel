import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { INovelItem } from '@/api/types/novels.interface'
import { getNovelAll } from '@/api/novels'
import NovelCard from '@/components/shared/NovelCard'

const NovelList = () => {
  const [state, setState] = useState<INovelItem[]>([])

  useEffect(() => {
    getNovelAll().then(res => setState(res))
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '8px 0'
      }}>
      {state.length > 0 && state.map(item => <NovelCard {...item} />)}
    </Box>
  )
}

export default NovelList
