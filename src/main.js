import ms from 'ms'
import lunchtime from './lunchtime.js'
import millisecondsUntil from './millisecondsUntil.js'

export default function howLongTillLunch(hours, minutes) {
  if (hours === undefined) {
    hours = '12'
  }
  if (minutes === undefined) {
    minutes = '00'
  }
  const millisecondsUntilLunch = millisecondsUntil(lunchtime(hours, minutes))
  return ms(millisecondsUntilLunch, { long: true })
}
