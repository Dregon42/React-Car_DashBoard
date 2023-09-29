import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        year: 'year',
        make: 'make',
        model: 'model',
        transmission: 'transmission',
    },
    reducers: {
        //  action is submitted elsewhere - written to state.name
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseTransmission: (state, action) => { state.transmission = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, chooseTransmission } = rootSlice.actions