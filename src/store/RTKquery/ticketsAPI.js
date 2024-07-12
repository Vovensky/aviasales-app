import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ticketsApi = createApi({
    reducerPath: 'ticketsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://aviasales-test-api.kata.academy/' }),
    endpoints: (builder) => ({
      getSearchId: builder.query({
        query: () => 'search',
      }),
      getTickets: builder.query({
        query: (data) => {
          if (data) return `tickets?searchId=${data.searchId}`
          return { data: '', error: '' }
        },
        keepUnusedDataFor: 0,
      }),
      getLogo: builder.query({
        query: (key) => `/pics.avs.io/99/36/${key}.png`,
      }),
    }),
  })

  export const { useGetSearchIdQuery, useGetTicketsQuery, useGetLogoQuery } = ticketsApi
