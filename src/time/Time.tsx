import { useEffect, useState } from 'react'

import { getTime } from './helpers'
import { STime, STimeValue } from './styles'
export const Time = () => {
  const [date, setDate] = useState(new Date(Date.now()))

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date(Date.now()))
    }, 1000)

    return () => clearInterval(id)
  })

  const time = getTime(date)

  return (
    <STime>
      <STimeValue>{time}</STimeValue>
    </STime>
  )
}
