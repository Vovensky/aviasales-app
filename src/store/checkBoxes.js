import { createSlice } from '@reduxjs/toolkit'

const checkBoxes = createSlice({
    name: 'checkBoxes',
    initialState: {
        ALL: true,
        ZERO: true,
        ONE: true,
        TWO: true,
        THREE: true,
    },
    reducers: {
        checkBoxesSliceWorking(state, action) {
            const { id, boolean } = action.payload
                switch (id) {
                    case 'ALL': {
                        const obj = {}
                        if (boolean) {
                        Object.keys(state).forEach((elem) => { obj[elem] = true })
                            return { ...obj }
                        }
                        Object.keys(state).forEach((elem) => { obj[elem] = false })
                            return { ...obj }
                    }
                    default: {
                        if (boolean) {
                            const result = Object.values(state).slice(1)
                            const firstIndex = result.findIndex((elem) => elem === false) + 1
                            const lastIndex = result.findLastIndex((elem) => elem === false) + 1
                            if (firstIndex === lastIndex) return { ...state, ALL: boolean, [id]: boolean }
                            return { ...state, [id]: boolean }
                        }
                        return { ...state, ALL: boolean, [id]: boolean }
                    }
                }
            },
    },
})

export default checkBoxes.reducer
export const { checkBoxesSliceWorking } = checkBoxes.actions
