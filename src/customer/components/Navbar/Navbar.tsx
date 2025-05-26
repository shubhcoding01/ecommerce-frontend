import { Avatar, Box, Button, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <>
        <Box>
            <div className='flex justify-between items-center px-5 lg:px-20 h-[70px] border-b'>
                <div>
                    <div className='flex items-center gap-2'>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <h1 className='logo cursor-pointer text-lg md:text-2xl  dark:text-[#3a8cde]'>
                            E-Commerce Store
                        </h1>
                    </div>
                </div>
                <div>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {
                        true ? <Button className='flex items-center gap-2' >
                            <Avatar src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40simo_sultan%2Fa-rough-guide-to-create-a-css-avatar-bb9888011887&psig=AOvVaw1xRSffZbsw0GBV7xbUz2Lb&ust=1748364569229000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCID3iN7LwY0DFQAAAAAdAAAAABAE'/>
                            <h1 className='font-semibold hidden lg:block'>
                                Bazaar
                                </h1>
                        </Button> : <Button variant='contained'>Login</Button>
                    }
                </div>
            </div>
        </Box>
    </>
  )
}

export default Navbar