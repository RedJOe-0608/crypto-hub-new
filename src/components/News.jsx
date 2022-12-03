import { Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useGetCryptoNewsQuery } from '../features/cryptoNewsApi'

const News = () => {
  const [search, setSearch] = useState('crypto')
  const [input, setInput] = useState('')
  const {data: cryptoNews} = useGetCryptoNewsQuery({search: search, count: 10})
  console.log(cryptoNews);
  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }



  return (
    <Stack className='mt-4 px-[2rem] spacing={4}'>
      <div className='flex justify-center mb-10 '>
        <form autoComplete='off' noValidate  className='w-[30%]' onSubmit={(e) => {
         
          e.preventDefault()
           setSearch(input) 
        } }>
      <TextField
        onChange={handleChange}
        size='small'
          label='Enter the name of the crypto..' />
           </form>
       </div>
      <Grid container spacing={3}>
         
        {cryptoNews?.value?.map((news) => (
           <Grid item xs={8} md={6} lg={4}>
              <a href={news?.url} className='hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 transition cursor-pointer p-4'>
                    <Card>
                      <CardContent>
                        <div className='flex flex-col'>
                        <h3 className='text-lg text-center mx-auto font-semibold mb-4 max-w-[16rem]'>{news?.name}</h3>
                        <img src={news?.image?.thumbnail?.contentUrl} className='w-[8rem] h-[8rem] mb-4 mx-auto' alt="" />
                        <Typography variant='body2' className='opacity-80        text-center'>{`${news?.description.substring(0,100)}...`}</Typography>
                        <div className='flex justify-between items-center mt-5'>
                          <div className='flex items-center'>

                          <img src={news?.provider[0]?.image?.thumbnail?.contentUrl} className='w-7 h-7 mr-1' alt="" />
                          <h6 className='text-xs'>{news?.provider[0]?.name}</h6>
                          </div>
                        <h6 className='text-xs'>{moment(news.datePublished).startOf('ss').fromNow()}</h6>
                        </div>

                        </div>

                      </CardContent>
                    </Card>
              </a>
              </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default News