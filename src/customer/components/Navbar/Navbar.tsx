import { Box, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
        <Box>
            <div>
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
            </div>
        </Box>
    </>
  )
}

export default Navbar