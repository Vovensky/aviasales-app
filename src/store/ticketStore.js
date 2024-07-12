import { createSlice } from '@reduxjs/toolkit'

const ticketsList = createSlice({
    name: 'ticketsList',
    initialState: {
        tickets: [],
        stop: false,
        transplants: {
            ALL: {
                value: true,
                number: 4,
            },

            ZERO: {
                value: true,
                number: 0,
            },
            ONE: {
                value: true,
                number: 1,
            },
            TWO: {
                value: true,
                number: 2,
            },
            THREE: {
                value: true,
                number: 3,
            },
        },
    },
    reducers: {
        addTicketsToStore(state, action) {
            const { tickets, stop } = action.payload.data
            switch (String(stop)) {
                case 'false': {
                    const arr = state.tickets.concat(tickets)
                    return {
                                ...state, tickets: arr, stop,
                            }
                }
                case 'true': {
                    return { ...state, numberOfErrors: 0, stop }
                }
                default: return action.payload.data
            }
        },
        changeTransplants(state, action) {
            const { id, boolean } = action.payload
            const { transplants } = state
                switch (id) {
                    case 'ALL': {
                        const obj = {}
                        if (boolean) {
                        Object.keys(state.transplants).forEach((elem) => { obj[elem] = { ...transplants[elem], value: true } })
                            return { ...state, transplants: { ...obj } }
                        }
                        Object.keys(state.transplants).forEach((elem) => { obj[elem] = { ...transplants[elem], value: false } })
                            return { ...state, transplants: { ...obj } }
                    }
                    default: {
                        if (boolean) {
                            const result = Object.values(state.transplants).slice(1)
                            const firstIndex = result.findIndex((elem) => elem.value === false) + 1
                            const lastIndex = result.findLastIndex((elem) => elem.value === false) + 1
                            if (firstIndex === lastIndex) {
                                return { ...state, transplants: { ...transplants, ALL: { ...transplants.ALL, value: true }, [id]: { value: boolean, number: transplants[id].number } } }
                            }
                            return { ...state, transplants: { ...state.transplants, ALL: { value: false, number: 4 }, [id]: { value: boolean, number: transplants[id].number } } }
                        }
                        return { ...state, transplants: { ...state.transplants, ALL: { value: boolean, number: 4 }, [id]: { value: boolean, number: transplants[id].number } } }
                    }
                }
            },
    },
})

export default ticketsList.reducer
export const {
 addTicketsToStore, changeTransplants, moreTickets, sortTickets,
} = ticketsList.actions
