import { postRating } from '@/api/posts'
import { useAppDispatch } from '@/store/hooks'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'

export const useReviews = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  console.log(id, 'id')

  //별점을 평가한다
  const submitRating = useCallback(
    async (userId, rating) => {
      const res = await postRating(id, userId, rating)
      if (res) {
        dispatch(res.data)
      }
      return res
    },
    [dispatch, id]
  )
  return {
    submitRating
  }
}
