import React, { useState } from 'react'
import Nav from '../reusable/Nav'
import { Stack, Typography, Grid, CardMedia, Card, Button, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
let sx = {
  Grid1Card: {
    width: 250,
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: "none",
    pb: 2
  },
  Grid1CardMedia: {
    height: 200,
    width: "100%",
    mb: 3
  },
  Grid1Button: {
    width: "100%",
    borderRadius: 40,
    height: 30,
    mt: 3,
    border: "1px solid #0000003e"

  },
  grid2ParentStack: {
    width: {
      xs: "95%",
      md: "90%"
    },
    height: 250,
    overflowX: 'auto',
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  grid2Card: {
    height: 'auto',
    width: {
      xs: 170,
      md: 200
    },
    borderRadius: 5,
    border: "1px solid #31CEB4"

  },
  grid2Cardmedia: {

    height: 150,
    width: '100%',
    objectFit: 'cover', // Ensure the image covers the container

  },
  grid2CursoelDots: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "linear-gradient(to right, #31CEB4, #138DD8);",

  },
  grid2Button1: {
    background: "linear-gradient(to right, #31CEB4, #138DD8);",
    width: 200,
    height: 30,
    borderRadius: 5
  },
  grid2Button2: {

    background: "linear-gradient(to right, #31CEB4, #138DD8);",
    width: 150,
    height: 30,
    borderRadius: 5,
    mt: 1

  },
  displayMd: {

    xs: "none",
    md: "flex"

  },
  displayXs: {
    xs: "flex",
    md: "none"
  }

}
function Home() {
  let [sliderData, SetSliderData] = useState(["lower interest rate", "interest free payments", "discount on materials"])
  let grid2ChildStack = {

    display: 'flex',
    flexDirection: 'row',

    width: {
      md: `calc(250px * ${sliderData.length} + 30px)`,
      xs: `calc(180px * ${sliderData.length} + 30px)`
    },
    gap: {
      xs: 2,
      md: 0
    }


  }

  return (
    <>
      <Nav
        home={true}
      />
      <Stack
        width={"100%"}
        mt={20}
        alignItems={"center"}
        height={"100%"}


      >

        <Typography
          width="80%"
          variant='h4'
        >
          new arrival
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"80%"}

        >
          <Stack
            width={"50%"}
          >
            <Typography
              mt={3}
              fontSize={14}
            >join today</Typography>
            <Stack
              height={3}
              width={{
                md: "5%",
                xs: "15%"
              }}
              bgcolor={"#000"}
            >

            </Stack>

          </Stack>
          <Stack
            alignItems={"center"}
            width={"50%"}
            display={sx.displayMd}
          >
            <Typography

              fontSize={26}
              color={"#31CEB4"}
              textAlign={"center"}


            >unlock premium features now</Typography>
          </Stack>
        </Stack>
        <Grid
          container
          spacing={{
            md: 2,
            xs: 0
          }}
          width={"80%"}
        >
          <Grid
            item
            md={5}
            xs={11}
            mt={2}


          >
            <Stack
              width="100%"
              alignItems={"flex-end"}
            >
              <Card
                variant='outlined'
                sx={sx.Grid1Card}
              >
                <CardMedia
                  image='./assets/membership.jpg'
                  sx={sx.Grid1CardMedia}
                />
                <Button variant="contained" color="info"

                  disableRipple
                  focusRipple={false}
                  disableElevation
                  sx={sx.Grid1Button}
                >
                  <Typography
                    textTransform={"uppercase"}
                    fontSize={16}
                    fontWeight={550}
                    letterSpacing={1}

                    variant="body1" color="primary"
                  >
                    continue
                  </Typography>
                </Button>

              </Card>
            </Stack>

          </Grid>
          <Grid
            item
            md={7}
            xs={11}

            mt={4}
          >
            <Stack
              alignItems={"center"}
              width={"100%"}
              display={sx.displayXs}
              mb={2}
            >
              <Typography

                fontSize={26}
                color={"#31CEB4"}
                textAlign={"center"}


              >unlock premium features now</Typography>
            </Stack>
            <Stack
              direction={"row"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1}
            >
              <IconButton >
                <ArrowBackIcon
                  color='inherit'
                  fontSize='large'
                />
              </IconButton>
              <Stack
                sx={sx.grid2ParentStack
                }

              >

                <Stack
                  justifyContent={{
                    md: "space-evenly",
                    xs: "flex-start"
                  }}

                  sx={grid2ChildStack}
                >
                  {sliderData.map((item, i) => (
                    <Card

                      variant='outlined'
                      key={i.toString()}
                      sx={sx.grid2Card}

                    >
                      <CardMedia
                        image={`./assets/img${i + 1}.jpg`}
                        alt={`Image ${item}`}
                        sx={sx.grid2Cardmedia}
                      />
                      <Stack
                        alignItems={"center"}
                        mt={2}
                        mb={2}
                      >
                        <Typography
                          textAlign={"center"}
                          variant='h5'
                          width={"80%"}
                          fontSize={22}
                        >
                          lower interst rate
                        </Typography>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              </Stack>
              <IconButton >
                <ArrowForwardIcon
                  color='inherit'
                  fontSize='large'
                />
              </IconButton>
            </Stack>
            <Stack
              width="100%"
              direction={"row"}
              justifyContent={"center"}
              mt={1}
              mb={2}
              gap={0.5}
            >
              {
                sliderData.map((_, i) => (<Stack
                  key={i.toString()}
                  sx={sx.grid2CursoelDots}

                ></Stack>))
              }

            </Stack>

            <Stack
              alignItems={"center"}
              mt={1}
              mb={1}
            >
              <Button
                variant='contained'
                sx={sx.grid2Button1
                }
              >unlock now</Button>
              <Button
                variant='contained'

                sx={sx.grid2Button2}
              >details</Button>
            </Stack>
          </Grid>


        </Grid>

      </Stack>

    </>
  )
}

export default Home