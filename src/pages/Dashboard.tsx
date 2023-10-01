import Background from '../assets/ryan-spencer-c-NEiPIxpYI-unsplash.jpg';
import DataTable from "../components/DataTable";


function Dashboard() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`} } className='bg-center bg-cover pb-5'>
      <div>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard
