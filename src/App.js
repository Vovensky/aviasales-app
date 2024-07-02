import { React } from 'react'

import Main from './components/main/Main'
// import { useGetSearchIdQuery, useGetTicketsQuery } from './store/RTKquery/ticketsAPI'

function App() {
  // const { data } = useGetSearchIdQuery()
  // const response = useGetTicketsQuery(data.searchId)
  // useEffect(() => {
  //   if (!data) return
  //   console.log(response)
  // }, [data, response])

  return <Main />
}

export default App
