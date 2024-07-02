import { createSlice } from '@reduxjs/toolkit'

const ticketsList = createSlice({
    name: 'ticketsList',
    initialState: {
        tickets: [],
        stop: false,
    },
    reducers: {
        addTicketsToStore(state, action) {
            console.log(action.payload.checkBoxesState)
            const { tickets, stop } = action.payload.data
            switch (String(stop)) {
                case 'false': {
                    const arr = state.tickets.concat(tickets)
                    return { tickets: arr, stop }
                }
                case 'true': {
                    return { ...state, stop }
                }
                default: return state
            }
        },
    },
})

export default ticketsList.reducer
export const { addTicketsToStore } = ticketsList.actions
