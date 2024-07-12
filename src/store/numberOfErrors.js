import { createSlice } from '@reduxjs/toolkit'

const numberOfErrors = createSlice({
    name: 'numberOfErrors',
    initialState: {
        numbersOfErrors: 0,
    },
    reducers: {
        increaseNumberOfErrors(state, action) {
            const { numbersOfErrors } = state
            const { boolean, error } = action.payload
            if (boolean && error.status === 500) return { numbersOfErrors: numbersOfErrors + 1 }
            console.log('not error')
            return { numbersOfErrors: 0 }
        },
    },
})
export default numberOfErrors.reducer
export const { increaseNumberOfErrors } = numberOfErrors.actions
