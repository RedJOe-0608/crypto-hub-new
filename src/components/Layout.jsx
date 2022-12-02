import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='w-[100%]'>{children}</div>
    </div>
  )
}

export default Layout