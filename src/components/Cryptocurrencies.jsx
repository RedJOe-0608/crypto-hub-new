import { Box, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../features/cryptoApi'
const Cryptocurrencies = () => {
  const {data: cryptos, isFetching} = useGetCryptosQuery()
  const [coins,setCoins] = useState(cryptos?.data?.coins)
  const [searchCoin, setSearchCoin] = useState('')

  useEffect(() => {
    let newCoins = cryptos?.data?.coins?.filter((coin) => coin?.name.toLowerCase().includes(searchCoin.toLowerCase()))
    setCoins(newCoins)
  },[searchCoin])
  const handleChange = (e) => {
    // console.log(e.currentTarget.value);
    setSearchCoin(e.currentTarget.value)
  }
  return (
    <Stack className='mt-4 px-[2rem] ' spacing={4}>
      <div className='flex justify-center items-center'>
      <TextField 
        onChange={handleChange}
        size='small' className=' w-[30%]' label='Enter the name of the cryptocurrency...' />

      </div>
      <Grid container >
          {coins?.map((coin) => {
            return (
        <Grid item xs={8} md={6} lg={4}>
             <Box className='hover:drop-shadow-[0_0px_7px_rgba(0,0,0,0.4)] hover:transition ease-in duration-500 transition cursor-pointer' padding={4} maxWidth={'18rem'}>
                <Card>
                  <CardContent>
                    <div className='flex justify-between'>
                    <h3 className='text-lg'>{`${coin.rank}. ${coin?.name}`}</h3>
                      <img src={coin?.iconUrl} className='w-[2rem] h-[2rem]' alt="" />
                    </div>
                    <Stack spacing={1} className='my-5'>
                    <Typography variant='subtitle2' className='opacity-75 '>{`Price: $${millify(coin?.price)}`}</Typography>
                    <Typography variant='subtitle2' className='opacity-75'>{`Market Cap: $${millify(coin?.marketCap)}`}</Typography>
                    <Typography variant='subtitle2' className='opacity-75'>{`Daily Change: ${millify(coin?.change)}%`}</Typography>

                    </Stack>
                  </CardContent>
                </Card>
              </Box>

        </Grid>
          )})}
      </Grid>
    </Stack>
  )
}

export default Cryptocurrencies