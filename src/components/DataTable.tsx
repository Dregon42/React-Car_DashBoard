import { useState } from 'react'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { useGetData } from '../custom-hook/FetchData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 90, hide:true },
  { field: 'year', headerName: 'YEAR', flex: 1 },
  { field: 'make', headerName: 'MAKE', flex: 1 },
  { field: 'model', headerName: 'MODEL', flex: 1 },
  { field: 'transmission', headerName: 'Transmission', flex: 1 }
];

function DataTable() {
  const [open, setOpen] = useState(false);
  const { carData, getData } = useGetData();
  const [rowSelectionModel, setRowSelectionModel] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    server_calls.delete(rowSelectionModel[0]);
    getData();
    console.log(`Selection model: ${rowSelectionModel}`);
    setTimeout( () => { window.location.reload(), 500})
  };



  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        id={rowSelectionModel}
         />
      <div className="flex flew row">
        <div>
          <button 
          onClick={handleOpen}
          className="p-3 bg-blue-300 m-3 rounded-full hover:bg-blue-100">
            Add New Car
          </button>
        </div>
        <button onClick={handleOpen} className="p-3 bg-blue-300 m-3 rounded-full hover:bg-blue-100">Update</button>
        <button onClick={deleteData} className="p-3 bg-blue-300 m-3 rounded-full hover:bg-blue-100">Delete</button>
      </div>
      <div className={ open ? 'hidden' : 'conatiner mx-96 my-5 flex flex-col justify-content-center'}
      style={{height:550, width: '50%'}}
      >
        <h2 className="p-3 bg-blue-200 my-2 rounded">Inventory List</h2>
        <DataGrid
          sx={{
            fontSize: 17,
            height: 400,
            width: '100%',
            opacity: 0.75,
            backgroundColor: 'grey',
            // marginX: 38,
            // paddingX: 2,
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
          rows={carData} columns={columns}
          autoPageSize checkboxSelection={true} onSelectionModelChange={(item: any) => {
            setRowSelectionModel(item)}}/>
      </div>
    </>
  );
};

export default DataTable
