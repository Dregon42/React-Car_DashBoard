import { forwardRef } from 'react'
import { TextField } from '@mui/material'

interface InputProps {
    name: string,
    placeholder: string
    required: true
};

const Input = forwardRef((props:InputProps, ref) => {
    return (
        // TODO: figure out how to change styling for text area.
        <TextField
            className='rounded-full px-5 h-10 text-black border-lg border-black shadow-sm text-xl'
            // label={props.name}
            margin="normal"
            inputRef={ref}
            type='text'
            {...props}
            
        />
  );
});

export default Input
