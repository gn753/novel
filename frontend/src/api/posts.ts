import { IPostItem } from './types/posts.interface'
import instance from '@/api/instance'

export const getPostAll: () => Promise<IPostItem[]> = async () => {
  const res = await instance.get('/post/list')
  const data = res.data
  return data
}

export const postRating = async (
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
