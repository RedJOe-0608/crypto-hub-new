import { Box, Typography } from '@mui/material'
import millify from 'millify'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const Carousel = ({cryptos}) => {
    const items = cryptos?.slice(0,10).map((coin) => {
        return (
            <Box className='flex flex-col items-center'>
                <img src={coin?.iconUrl} className='w-[4rem] h-[4rem] mb-2' alt="" />
                <Typography variant='subtitle1'>{`${coin?.name} (${coin?.symbol})`}</Typography>
                    <Typography variant='subtitle2' className='opacity-75'>{`Price: $${millify(coin?.price)}`}</Typography>
                    <Typography variant='subtitle2' className='opacity-75'>{`Daily Change: ${millify(coin?.change)}%`}</Typography>
                    
                
            </Box>
        )
    })

    const responsive ={
        0: {
            items: 1,
        },
        576:{
            items: 2
        },
        876: {
            items: 4,
            itemsFit: 'contain',
        }
      }
  return (
    <div
        className='flex mt-[2.5rem]'
    >
        <AliceCarousel 
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            autoPlay
            items={items}
        />
    </div>
  )
}

export default Carousel