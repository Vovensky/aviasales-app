import { configureStore } from '@reduxjs/toolkit'

import checkBoxesReducer from './checkBoxes'
import ticketsReducer from './ticketStore'
import errorsReducer from './numberOfErrors'
import toolBarReducer from './toolBarState'
import { ticketsApi } from './RTKquery/ticketsAPI'

export default configureStore({
    reducer: {
        checkBoxes: checkBoxesReducer, // первый тудус
        [ticketsApi.reducerPath]: ticketsApi.reducer,
        getTickets: ticketsReducer,
        toolBarState: toolBarReducer,
        setError: errorsReducer,
    }, // обычно называется срезами
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketsApi.middleware),
})

// //что делаем с эпп жс.

// // import {Provider} from 'react-redux'
// // import store from './store/index.js'

// // <Provider store>
// //     <App />
// // </Provider>

// import { useSelector } from 'react-redux'
// component TodoList() {
// const todos = useSelector(state => state.todos.todos) //юсселектор достает из кофигеСтор редюсер
// ы, а
// редюсеры содержат все функции из туду слайс и задают изначальное значение.
//  В сторе сейчас один туду в которому
//     // другой туду
// }

// import {useDispatch} from 'react-redux'
// import {addTodo} from './todoSlice'

// const dispatch = useDispatch() //функция из-зак которой срабатывает триггер, что есть экшн,
// который надо передать,
// //в редюсеры
// const addTask = () => dispatch(addTodo({text}))
// //далее просто передаём её для обработки события
