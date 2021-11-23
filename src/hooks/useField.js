import { useState } from 'react'

export default function useField (type) {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    setValue(target.value)
  }

  return {
    type,
    value,
    onChange
  }
}
