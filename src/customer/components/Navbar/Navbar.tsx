import { Box, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
        <Box>
            <div>
                <div>
                    <div>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <h1>
                            E-Commerce Store
                        </h1>
                    </div>
                </div>
            </div>
        </Box>
    </div>
  )
}

export default Navbar