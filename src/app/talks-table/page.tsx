'use client'

import { NavigationSection, Table } from './components'
import { columns } from './helpers'

import data from '../../data/data.json'

export default function TalksTablePage() {
  return (
    <>
      <h1 className="text-center">Charlas y talleres registrados</h1>
      <NavigationSection />
      <div className="d-flex justify-content-center">
        <Table columns={columns} data={data} width="98%" />
      </div>
    </>
  )
}
