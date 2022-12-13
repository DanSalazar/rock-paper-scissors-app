import { useState } from 'react'

export default function useField (type) {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  const clearValue = () => setValue('')

  return {
    type,
    value,
    clearValue,
    onChange
  }
}
