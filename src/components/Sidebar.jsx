import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'

const Sidebar = () => {
    const drawerWidth= 240
  return (
    <Drawer
        variant='permanent'
        anchor='left'
    >
        <Box className='w-[240px] p-3'>
            <Typography variant='h6'>Hellooo!!!</Typography>
        </Box>
    </Drawer>
  )
}

export default Sidebar