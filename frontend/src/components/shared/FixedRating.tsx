import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

const FixedRationg = ({ value = 0 }: { value: number }) => {
  return (
    <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      size="small"
      emptyIcon={
        <StarIcon
          style={{ opacity: 0.55 }}
          fontSize="inherit"
        />
      }
    />
  )
}

export default FixedRationg
