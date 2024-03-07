export interface Talk {
  id: string
  title: string
  description: string
  place: string
  date: String
  durationMins: number
  tags: string[]
  speakers?: Speaker[]
}

export interface Speaker {
  name: string
  photo: string
  biography: string
}
