import { Box, Drawer, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const drawerWidth= 260
  return (
    <Drawer
        variant='permanent'
        anchor='left'
        elevation={0}
        disablePadding
        sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        
    >
        {/* You can pass in css props directly in the Box component */}
        <Box bgcolor="#001529" className='min-h-full'>
            <Container sx={{display: "flex", alignItems: "center", marginTop: "1rem"}}>
                  <img src='/img/cryptocurrency.png' className='w-[3rem] h-[3rem] mr-2' alt="" /> 
            <Typography variant='h5' sx={{color: "#1890ff"}}>Crypto Hub</Typography>
            </Container>
          
            <List sx={{marginTop: "3rem", }} className='text-gray-300 '>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                    <ListItemButton>
                        <Link className='flex' to={'/'}>
                            <ListItemIcon><HomeIcon className='text-gray-300'/></ListItemIcon>
                            <ListItemText primary="Home"/>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                     <ListItemButton>
                        <Link className='flex' to={'/cryptocurrencies'}>
                            <ListItemIcon><ShowChartIcon className='text-gray-300'/></ListItemIcon>
                            <ListItemText primary="CryptoCurrencies" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{marginBottom: "1.5rem"}}>
                     <ListItemButton>
                        <Link className='flex' to={'/news'}>  
                            <ListItemIcon><NewspaperIcon className='text-gray-300'/></ListItemIcon>
                            <ListItemText primary="News"/>
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}

export default Sidebar