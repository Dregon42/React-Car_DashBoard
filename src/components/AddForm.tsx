import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseYear, chooseMake, chooseModel, chooseTransmission } from "../redux/slices/RootSlice";
import Input from './Input';
import Button from './Button';


interface AddFormProps {
  id?: string[],
}

function AddForm(props:AddFormProps) {
  const { register, handleSubmit } = useForm({});
  const dispatch = useDispatch();
  const store = useStore();
  
  const onSubmit = (data: any) => {
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data);
      setTimeout(() => window.location.reload(), 100);
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseYear(data.year));
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseTransmission(data.transmission));

      server_calls.create(store.getState());
      setTimeout(() => window.location.reload(), 100);
    }
  }

  return (
      <div className='mt-0 flex flex-col justify-center' >
        <div className=' my-4 flex justify-center'>
          <h1 className='text-2xl italic font-bold text-white' >Add Vehicle</h1>
        </div>
        <div className='px-0 mx-0 flex justify-center'>
          <form 
          className='w-1/2 p-12 shadow-xl flex flex-col justify-center place-content-center mx-5 px-20 bg-slate-300 bg-opacity-75 space-y-4 rounded-full'
          onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('year')}
              // className='rounded-full px-5 h-10 text-black border-2 border-black shadow-sm text-xl'
              // type='text'
              name='year'
              placeholder='Year'
              required />
            <Input
              {...register('make')}
              // className='rounded-full px-5 h-10 text-black border-2 border-black shadow-sm text-xl'
              // type='text'
              name='make'
              placeholder='Make'
              required />
            <Input
              {...register('model')}
              // className='rounded-full px-5 h-10 text-black border-2 border-black shadow-sm text-xl'
              // type='text'
              name='model'
              placeholder='Model'
              required />
            <Input
              {...register('transmission')}
              // className='rounded-full px-5 h-10 text-black border-2 border-black shadow-sm text-xl'
              // type='text'
              name='transmission'
              placeholder='Transmission'
              required />
            <Button 
              className='font-bold h-10 rounded-full border-y-2 ml-20 w-2/5 text-white bg-black transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:drop-shadow-2xl' 
              type='submit' >
                Submit
            </Button>
            <button 
              className='font-bold h-10 rounded-full border-y-2 ml-20 w-2/5 align-self-center text-black bg-yellow-500 transition ease-in-out shadow-2xl shadow-black hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 hover:drop-shadow-xl hover:shadow-yellow-500'  
              type='submit' >
                Favorite
              </button>
          </form>
        </div>
      </div> 
    )
}

export default AddForm
