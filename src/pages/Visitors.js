// import Stats from '../components/Stats'
import TopNavBar from '../components/TopNavBar'
import './Visitors.css'
import BasicTable from '../components/Table'
// import ExampleWithLocalizationProvider from '../components/ExampleWithLocalizationProvider'

const Visitors = () => {
  const tabs = [
    {
      id: 1,
      name: 'Invoice',
      path: '/finances/invoices'
    },
    {
      id: 2,
      name: 'Dues',
      path: '/finances/dues'
    },
    {
      id: 3,
      name: 'Revenue',
      path: '/finances/revenue'
    }
  ]

  return (
    <>
      <TopNavBar tabs={tabs} />
      <section className="container">
        {/* <Stats /> */}
        {/* Table Section */}
        <BasicTable />
        {/* <ExampleWithLocalizationProvider /> */}
      </section>
    </>
  )
}

export default Visitors
