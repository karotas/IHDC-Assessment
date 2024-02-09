import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Typography, Button, } from "@mui/material"
import { Stack, Switch, CardMedia, Avatar, IconButton } from "@mui/material"

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from './Drawer';


import { Link } from 'react-router-dom';

let sx = {
  AppBar: {
    height: 50,
    top: 0,

    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    border: "none"
  },
  HomeAppBar: {

    top: 50,

    left: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    border: "none"
  },
  FormControlLabel: {
    mt: 9
  },
  displayXs:{
display:{
  xs:"flex",
  md:"none"

}  },
  displayMd:{
   display:{
    xs:"none",
    md:"flex"
   }
  },
}
function Nav({ home }) {
  let [drawerOpen, setDrawerOpen] = useState(false)
  let routes=  ["home", "dashboard", "products", "transactions", "journals"]
  useEffect(() => {
    return () => setDrawerOpen(false)
  }, [])
  let openDrwer = () => {
    setDrawerOpen(true)
  }
  function MainNav() {
    return (
      <>
        <AppBar
          variant='outlined'
          component={"div"}
          position='fixed'
          color='primary'
          sx={{
            ...sx.AppBar,
            bgcolor: "#ddd"

          }}

        >
          <Stack
            width={"40%"}
            height={"100%"}
            alignItems={"center"}

          >
            <CardMedia
              sx={{
                height: "100%",
                width: 80,
                objectFit: "fill",
                objectPosition: "center"

              }}
              image='./assets/real-estate-house.png'

            />
          </Stack>

          <Typography
            letterSpacing={1}
            width={"60%"}
            variant="body2"
            fontSize={13}
            fontWeight={530}
            color="black">
            XYZ SYSTEMS LLP

          </Typography>



        </AppBar>


      </>
    )
  }
  function HomeNav() {
    return (
      <>
        <AppBar
          variant='outlined'
          component={"div"}
          position='fixed'
          color='inherit'
        
          sx={{
            ...sx.HomeAppBar,
            pr: 2



          }}

        >
          <IconButton
            onClick={openDrwer}
            sx={sx.displayXs}
          >
            <MenuIcon
              color='primary'
              fontSize='large'
            />
          </IconButton>
          <Drawer
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
          <Stack
            sx={sx.displayMd}
            width={"100%"}
            height={60}
            alignItems={"center"}
            direction={"row"}
            justifyContent={"center"}



          >
            {
              routes.map((route, i) => (<Link
                key={i}
                style={{
                  textDecoration: "none"
                }}
                to={route === "home" ? "/" : `/${route}`}
              >
                <Typography
                  color={"#000"}
                  mr={4}
                  fontSize={13}
                  fontWeight={550}
                  letterSpacing={1}

                >
                  {route}
                </Typography>

              </Link>))
            }
           
          
      
        
          </Stack>
          <Stack
              
          
              height={"100%"}
              position={"absolute"}
              right={40}
              top={10}
              alignItems={"center"}
              justifyContent={"center"}
              sx={sx.displayMd}
              >
            <Avatar
            alt='user profile'
            src='./assets/user.jpg'
            />
            <Typography
            textAlign={"center"}
            fontSize={12}
            mt={1}
            >joseph tazer</Typography>

          </Stack>






        </AppBar>

      </>
    )
  }
  return home ? <HomeNav /> : <MainNav />
}


export default Nav