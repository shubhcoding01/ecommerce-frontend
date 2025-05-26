import { Box, Button, IconButton } from '@mui/material'
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
                        true ? <Button>
                            Bazaar
                        </Button> : <Button>Login</Button>
                    }
                </div>
            </div>
        </Box>
    </>
  )
}

export default Navbar