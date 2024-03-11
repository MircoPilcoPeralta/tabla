export interface Talk {
  id?: string
  title: string
  description?: string
  place: string
  startDate: string
  endDate: string
  tags?: string[]
  speaker?: Speaker[]
}

export interface Speaker {
  name?: string
  photo?: string
  biography?: string
}
