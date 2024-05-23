import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Review {
  novelId: string
  userId: string
  rating?: number
  comment?: string
}

interface ReviewState {
  reviews: Review[]
}

const initialState: ReviewState = {
  reviews: []
}

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload
    },
    addOrUpdateReview(state, action: PayloadAction<Review>) {
      const existingReview = state.reviews.find(
        review =>
          review.novelId === action.payload.novelId &&
          review.userId === action.payload.userId
      )
      if (existingReview) {
        existingReview.rating = action.payload.rating
        existingReview.comment = action.payload.comment
      } else {
        state.reviews.push(action.payload)
      }
    }
  }
})

export const { setReviews, addOrUpdateReview } = reviewSlice.actions
export default reviewSlice.reducer
