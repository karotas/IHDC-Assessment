import React, { useEffect } from 'react'
import {
    SwipeableDrawer as Dr, Avatar, ListSubheader, IconButton,
    List, ListItem, ListItemButton, ListItemIcon, Stack, Switch, Typography, Divider, Paper
} from '@mui/material'


import CloseIcon from '@mui/icons-material/Close';


import { Link } from 'react-router-dom';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
let sx = {
    drawer: {
        width: {
            xs: "70vw",
            md: 300,
            lg: "30vw"

        },
        backgroundColor: "#fff",
        height: "100%",


    },
    ListItemButton: {



        borderRadius: 5,
        height: 50,










    },
    Link: {
        textDecoration: "none",
        width: "100%"
    },
    dStack: {
        height: {
            xs: "100%",
            md: "auto"
        },
        width: "100%",
        bgcolor: "#fff",
        height: "100dvh"



    },
    ListSubheader: {
        bgcolor: "#fff"
    },
    Avatar:{
        width:56,
        height:56
    }

}
function Drawer({ drawerOpen, setDrawerOpen }) {

    let routes = [{
        path: "/",
        name: "home",
        icon: <HomeIcon
            color='inherit'
            fontSize='large'
        />
    },
    {
        path: "/dashboard",
        name: "dashboard",
        icon: <DashboardIcon
            color='inherit'
            fontSize='large'
        />
    },
    {
        path: "/products",
        name: "products",
        icon: <ShoppingCartIcon
            color='inherit'
            fontSize='large'
        />,
    },
    {
        path: "/transations",
        name: "transations",
        icon: <PaymentIcon
            color='inherit'
            fontSize='large'
        />
    },
    {
        path: "/journal",
        name: "journal",
        icon: <MenuBookIcon
            color='inherit'
            fontSize='large'
        />
    },

    ]



    let onDrawerOpen = () => {
        setDrawerOpen(true)
    }
    let closeDrawer = () => {

        setDrawerOpen(false)
    }
   

    return (
        <>



            <Dr
                variant='temporary'
                transitionDuration={1000}
                open={drawerOpen}
                closeAfterTransition
                hideBackdrop
                anchor='left'
                elevation={5}
                onClose={closeDrawer}
                onOpen={onDrawerOpen}







            >
                <Stack

                    component={Paper}
                    bgcolor={"#fff"}

                    sx={
                        sx.drawer
                    }






                >

                    <List sx={
                        sx.dStack


                    }  >
                        <ListSubheader
                            sx={sx.ListSubheader}
                        >
                            <Stack
                                alignItems={"flex-end"}
                                width="100%"

                            >
                                <IconButton
                                    onClick={closeDrawer
                                    }>
                                    <CloseIcon color='secondary' fontSize='medium' />
                                </IconButton>
                            </Stack>
                            <Stack
                                width="100%"
                                alignItems={"center"}
                                height={"auto"}
                                pb={2}
                            >
                                <Avatar
                                    alt="user Avatar"
                                    src="./assets/user.jpg"
                                    sx={sx.Avatar
                                    }
                                />
                                <Typography
                                    mt={1}
                                    color={"primary"}
                                    letterSpacing={0.5}
                                >joseph tazer</Typography>
                            </Stack>

                        </ListSubheader>
                        <Divider />

                        <Stack


                            bgcolor={"#fff"}
                            width={"100%"}

                        >
                            {
                                routes.map((route, i) => (<>
                                    <ListItem
                                        key={i}
                                        onClick={closeDrawer}



                                    >
                                        <Link style={sx.Link} to={route.path}>
                                            <ListItemButton

                                                sx={sx.ListItemButton
                                                }
                                            >

                                                <ListItemIcon

                                                >
                                                    {
                                                        route.icon
                                                    }

                                                </ListItemIcon>





                                                <Typography
                                                    textTransform={"capitalize"}
                                                    color={"secondary"}
                                                    fontSize={{ sx: 12 }}


                                                >
                                                    {route.name}
                                                </Typography>


                                            </ListItemButton>
                                        </Link>
                                    </ListItem>

                                </>
                                ))
                            }
                        </Stack>

                    </List>

                </Stack>


            </Dr>


        </>

    )
}

export default Drawer