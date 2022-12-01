import { Box, Drawer, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import React from 'react'

const Sidebar = () => {
  return (
    <Drawer
        variant='permanent'
        anchor='left'
    >
        {/* You can pass in css props directly in the Box component */}
        <Box width={240} className='bg-[#001529] min-h-full'>
            <Container sx={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                  <img src='/img/cryptocurrency.png' className='w-[3rem] h-[3rem] mr-2' alt="" /> 
            <Typography variant='h5' sx={{color: "#1890ff"}}>Crypto Hub</Typography>
            </Container>
          
            <List sx={{marginTop: "3rem", }} className='text-gray-300 '>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                    <ListItemButton>

                    <ListItemIcon><HomeIcon className='text-gray-300'/></ListItemIcon>
                    <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                     <ListItemButton>

                    <ListItemIcon><ShowChartIcon className='text-gray-300'/></ListItemIcon>
                    <ListItemText primary="CryptoCurrencies" />
                     </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                     <ListItemButton>

                    <ListItemIcon><NewspaperIcon className='text-gray-300'/></ListItemIcon>
                    <ListItemText primary="News"/>
                     </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}

export default Sidebar