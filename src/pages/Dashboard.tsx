import AddForm from "../components/AddForm";
import Background from '../assets/ryan-spencer-c-NEiPIxpYI-unsplash.jpg';
import DataTable from "../components/DataTable";


function Dashboard() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`} } className='bg-center bg-cover '>
      <div>
        <DataTable />
      </div>
    </div>
  )
}

export default Dashboard
