import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4248964d04mshd2e07c07e4e76dfp1a0fd7jsn2625366708f0',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
  const baseUrl = 'https://coinranking1.p.rapidapi.com'
  const createRequest = (url) => ({url, headers: cryptoApiHeaders})

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest(`/coins?limit=${100}`)
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
        })
    })
  })

  export const {useGetCryptosQuery, useGetCryptoHistoryQuery} = cryptoApi