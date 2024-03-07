'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { ReactNode, useState } from 'react'

import { Talk } from '@/interfaces'
import data from '../../../data/data.json'

export const TalksTable = () => {
  const columns = [
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
      enableResizing: false,
      size: 10,
    },
    {
      header: 'Lugar',
      accessorKey: 'place',
      enableResizing: false,
      size: 30,
    },
    {
      header: 'Fecha',
      accessorKey: 'date',
    },
    {
      header: 'Duración',
      accessorFn: (row: Talk) => `${row.durationMins} minutos `,
    },
    {
      header: 'Tags',
      accessorKey: 'tags',
    },
    {
      header: 'Speakers',
      accessorFn: (row: Talk) =>
        row.speakers === undefined
          ? 'Sin speaker'
          : row.speakers.map((speaker) => speaker.name),
    },
    {
      header: 'Opciones',
      cell: (props: any) => (
        <div className="d-flex ">
          <button
            className="btn btn-primary"
            onClick={() => {
              console.log(props.row.original.id)
            }}
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(props.row.original.id)
            }}
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ]

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  return (
    <div>
      <div className="mb-1">
        Mostrar
        <select
          className="form-select"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        entradas
      </div>

      <table className=" table-bordered table-dark table ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="col" key={header.id}>
                  {header.column.columnDef.header as ReactNode}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='border-b" bg-white'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
