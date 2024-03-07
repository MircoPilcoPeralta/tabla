import { TalksTable } from './components'
import { Layout } from './layouts/Layout'

export default function TalksTablePage() {
  return (
    <Layout>
      <h1 className="text-center">Charlas y talleres registrados</h1>
      <div className="">
        <TalksTable />
      </div>
    </Layout>
  )
}
