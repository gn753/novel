import { INovelItem } from './types/novels.interface'
import instance from '@/api/instance'

export const getNovelAll: () => Promise<INovelItem[]> = async () => {
  const res = await instance.get('/novels')
  const data = res.data
  return data
}

export const postNovelRating = async (
  novelId: string,
  userId: string,
  rating: number
) => {
  try {
    const response = await instance.post('/reviews/rate', {
      novelId,
      userId,
      rating
    })
    return response
  } catch (error) {
    console.error('Failed to submit rating:', error)
  }
}
