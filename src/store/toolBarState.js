import { createSlice } from '@reduxjs/toolkit'

const toolBarState = createSlice({
    name: 'toolBarState',
    initialState: {
        toolBar: 0,
    },
    reducers: {
        increaseToolBarState(state, action) {
            const { toolBar } = state
            const { increase, stop } = action.payload
            if (stop) return { ...state, toolBar: 100 }
            if (toolBar >= 75) return state
            return { toolBar: toolBar + increase }
        },
    },
})
export default toolBarState.reducer
export const { increaseToolBarState } = toolBarState.actions
