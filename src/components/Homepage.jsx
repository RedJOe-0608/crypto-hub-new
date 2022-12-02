import React from 'react'
import Center from './Center'
import { useGetCryptosQuery } from '../features/cryptoApi'
const Homepage = () => {
  const {data: cryptos, isFetching} = useGetCryptosQuery()
    console.log(cryptos);
  return (
    <>
      <Center cryptos={cryptos?.data}/>
    </>
  )
}

export default Homepage