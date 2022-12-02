import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const Carousel = ({cryptos}) => {
    const items = cryptos?.slice(0,10).map((coin) => {
        return (
            <div>
                <img src={coin?.iconUrl} className='w-[4rem] h-[4rem]' alt="" />
            </div>
        )
    })

    const responsive ={
        0: {
            items: 2,
        },
        512: {
            items: 4,
            itemsFit: 'contain',
        }
      }
  return (
    <div
        className='flex mt-[3rem]'
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