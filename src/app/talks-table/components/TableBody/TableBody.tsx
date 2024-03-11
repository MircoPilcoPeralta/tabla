import { Row, flexRender } from '@tanstack/react-table'

interface Props<T extends object> {
  tableRows: Row<T>[]
}

export const TableBody = <T extends object>({ tableRows }: Props<T>) => {
  return (
    <tbody>
      {tableRows.map((row) => (
        <tr key={row.id} className='border-b" bg-white'>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
