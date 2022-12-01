import { Box } from '@mui/material'
import React from 'react'
const Center = ({cryptos}) => {
  return (
    <Box>
      {cryptos?.map((coin) => {
        return (
          <div className='flex flex-col justify-center'>
            <h2 className='text-black'>{coin?.name}</h2>
          </div>
        )
      })}
    </Box>
  )
}

export default Center