import { IPostItem } from './types/posts.interface'
import instance from '@/api/instance'

export const getPostAll: () => Promise<IPostItem[]> = async () => {
  const res = await instance.get('/post/list')
  const data = res.data
  return data
}
