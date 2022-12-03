import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import { useGetCryptoNewsQuery } from '../features/cryptoNewsApi'
import moment from 'moment/moment'
const Center = ({cryptos}) => {
  const {data: cryptoNews ,isFetching} = useGetCryptoNewsQuery({search: 'crypto'})
  console.log(cryptoNews);
  return (
    <Box display="flex" flexDirection="column" marginTop={1} maxWidth={"calc(100vw - 280px)"} padding={2}>
          <Typography variant='h5'>Global Crypto Stats</Typography>
      
      <Grid container rowGap={8} className='mt-5'>
        <Grid item xs={8}  md={5}>
          <Typography variant='subtitle2' className='text-gray-500 opacity-75'>Total CryptoCurrencies:</Typography>
            <p className='text-2xl opacity-80'>{millify(cryptos?.stats?.total)}</p>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant='subtitle2' className='text-gray-500 opacity-75'>Total Exchanges:</Typography>
          <p className='text-2xl opacity-80'>{millify(cryptos?.stats?.totalExchanges)}</p>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant='subtitle2' className='text-gray-500 opacity-75'>Total Market Cap:</Typography>
          <p className='text-2xl opacity-80'>{`$${millify(cryptos?.stats?.totalMarketCap)}`}</p>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant='subtitle2' className='text-gray-500 opacity-75'>Total 24h Volume:</Typography>
          <p className='text-2xl opacity-80'>{`$${millify(cryptos?.stats?.total24hVolume)}`}</p>
        </Grid>
        <Grid item xs={8} sm={5}>
          <Typography variant='subtitle2' className='text-gray-500 opacity-75'>Total Markets:</Typography>
          <p className='text-2xl opacity-80'>{`$${millify(cryptos?.stats?.totalMarkets)}`}</p>
        </Grid>
      </Grid>
      <Box marginTop={4}>
        <div className='flex justify-between'>
      <Typography variant='h5'>Top 10 Cryptos In The World</Typography>
      <Button ><Link to={'/cryptocurrencies'} className='text-lg'>Show More</Link></Button>

        </div>
      <Carousel  cryptos={cryptos?.coins}/>

    </Box>
        <Typography variant='h5' sx={{marginTop: "3rem"}}>Latest Crypto News</Typography>
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
    </Box>
  )
}

export default Center
