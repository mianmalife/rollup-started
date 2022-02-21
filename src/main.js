import format from "date-fns/format"

var span = document.querySelector('#time-now')

export default function update() {
  span.textContent = format(new Date(), 'hh:mm:ssa')
  setTimeout(update, 1000)
}
