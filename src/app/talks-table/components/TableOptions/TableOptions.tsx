import { Table } from '@tanstack/react-table'
import { ChangeEvent } from 'react'

interface props<T extends object> {
  table: Table<T>
}

const PAGINATION_SIZE_LIST = [5, 10, 20, 30, 40, 50]

export const TableOptions = <T extends object>({ table }: props<T>) => {
  const handlePageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    table.setPageSize(Number(e.target.value))
  }

  return (
    <div className="d-flex align-items-center justify-content-between mb-1 flex-row">
      <div>
        <span>
          Mostrar
          <select
            value={table.getState().pagination.pageSize}
            onChange={handlePageChange}
          >
            {PAGINATION_SIZE_LIST.map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          entradas
        </span>
      </div>

      <div>
        <button
          className="btn btn-light"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </button>
        <button
          className="btn btn-light"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
