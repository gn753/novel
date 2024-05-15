import { ChangeEvent, useCallback, useState } from 'react'

const useInput = (initalValue: string) => {
  const [value, setValue] = useState(initalValue)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleMuiChange = useCallback(
    (_e: React.SyntheticEvent<Element, Event>, newValue: string) => {
      setValue(newValue)
    },
    []
  )

  return { value, handleChange, handleMuiChange }
}

export default useInput
