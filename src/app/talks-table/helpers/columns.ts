import { OptionsColumn } from '../components'
import { loadEndDate, loadSpeakerInfo, loadStartDate } from './loadTalkColumns'

export const columns = [
  {
    header: 'id',
    accessorKey: 'id',
  },
  {
    header: 'Título',
    accessorKey: 'title',
  },
  {
    header: 'Descripción',
    accessorKey: 'description',
    size: 15,
    minSize: 10,
    maxSize: 20,
  },
  {
    header: 'Lugar',
    accessorKey: 'place',
  },
  {
    header: 'Fecha y hora de inicio',
    accessorFn: loadStartDate,
  },
  {
    header: 'Fecha y hora de finalización',
    accessorFn: loadEndDate,
  },
  {
    header: 'Tags',
    accessorKey: 'tags',
  },
  {
    header: 'Speaker',
    accessorFn: loadSpeakerInfo,
  },
  {
    header: 'Opciones',
    cell: OptionsColumn,
  },
]
