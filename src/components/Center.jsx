import { Box, Button, Grid, Typography } from '@mui/material'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
const Center = ({cryptos}) => {
  return (
    <Box display="flex" flexDirection="column" marginTop={1} maxWidth={"calc(100vw - 260px)"} padding={2}>
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
      


  
    </Box>
  )
}

export default Center

    {/* {cryptos?.coins?.map((coin) => {
        return (
          <div className='flex flex-col justify-center'>
            <h2 className='text-black'>{coin?.name}</h2>
          </div>
        )
      })} */}