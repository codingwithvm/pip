export function formatDateToDayMonth(dateString: Date) {
  const date = new Date(dateString)

  const options: {} = { day: 'numeric', month: 'long' }

  return date.toLocaleDateString('pt-BR', options)
}
