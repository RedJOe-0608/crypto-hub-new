import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const cryptoNewsApiheaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4248964d04mshd2e07c07e4e76dfp1a0fd7jsn2625366708f0',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const createRequest = (url) => ({
    url, headers: cryptoNewsApiheaders
})

export const cryptoNewsApi = createApi({
    redecerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({search,count}) => createRequest(`/search/?q=${search}&safeSearch=Off&freshness=Day&textFormat=Raw&count=${count}`) 
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi