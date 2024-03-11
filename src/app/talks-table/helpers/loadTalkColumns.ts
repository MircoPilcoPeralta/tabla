import { Speaker, Talk } from '@/interfaces'

export const loadSpeakerInfo = (row: Talk) =>
  row.speaker === undefined
    ? 'Sin speaker'
    : row.speaker.map((speaker: Speaker) => speaker.name)

export const loadStartDate = (row: Talk) => loadDateInfo(row.startDate)
export const loadEndDate = (row: Talk) => loadDateInfo(row.endDate)

const loadDateInfo = (textDate: string) => {
  try {
    const date: Date = new Date(textDate)
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} `
  } catch (error) {
    return 'Fecha inválida'
  }
}
