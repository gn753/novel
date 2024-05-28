import { postNovelRating } from '@/api/novels'
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
      if (!id) return

      const res = await postNovelRating(id, userId, rating)
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
