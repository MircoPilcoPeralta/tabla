'use client'

import { useState } from 'react'

import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TableBody, TableHeader } from '..'
import { TableOptions } from '../TableOptions/TableOptions'

interface props<T extends object> {
  data: T[]
  columns: ColumnDef<T>[]
  pageSize?: number
  pageIndex?: number
  width?: string
}

const DEFAULT_PAGE_SIZE = 5
const DEFAULT_PAGE_INDEX = 0
const DEFAULT_WIDTH = '100%'

export const Table = <T extends object>({
  data = [],
  columns = [],
  pageSize = DEFAULT_PAGE_SIZE,
  pageIndex = DEFAULT_PAGE_INDEX,
  width = DEFAULT_WIDTH,
}: props<T>) => {
  const [pagination, setPagination] = useState({ pageSize, pageIndex })
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    state: {
      pagination,
      sorting,
    },
  })

  return (
    <div style={{ width }}>
      <TableOptions table={table} />
      <table className="table-striped table-hover border-dark table">
        <TableHeader headerGroups={table.getHeaderGroups()} />
        <TableBody tableRows={table.getRowModel().rows} />
      </table>
    </div>
  )
}
