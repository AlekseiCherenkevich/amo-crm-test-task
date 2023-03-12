export function getLeadingZero(p: number) {
  return p < 10 ? '0' + p : p
}

export const getTime = (date: Date) => {
  const minutes = getLeadingZero(date.getMinutes())
  const hours = getLeadingZero(date.getHours())
  const seconds = getLeadingZero(date.getSeconds())

  return `${hours}:${minutes}:${seconds}`
}
