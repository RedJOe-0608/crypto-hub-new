import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Center from './Center'
import { useGetCryptosQuery } from '../features/cryptoApi'
import Sidebar from './Sidebar'
const Homepage = () => {
  const {data: cryptos, isFetching} = useGetCryptosQuery()
    console.log(cryptos);
  return (
    <Grid container>
      <Grid item xs='auto'>
          <Sidebar />
      </Grid>
      <Grid item xs> <Center cryptos={cryptos?.data?.coins}/></Grid>
      
       
    </Grid>
  )
}

export default Homepage