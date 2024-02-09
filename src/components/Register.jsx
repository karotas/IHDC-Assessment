import React from 'react'
import { Stack, Typography, Grid, CardMedia, Button, TextField } from "@mui/material"
import { Link } from 'react-router-dom';
import CountrySelect from './ChooseCountry';
let sx = {
  grid1: {
    display: {
      xs: "grid",
      md: "none"
    }
  },
  grid3: {
    display: {
      xs: "none",
      md: "grid"
    }
  },
  CardMedia: {
    width: "100%",
    height: {
      xs: 400,
      md: "100%"
    },
    mt: 2,
    objectFit: "inherit",
    ml: {
      md: 5,

    }
  },
  miniTextfield:
  {
    width: "50%",
    '& .MuiOutlinedInput-root': {
      borderRadius: '18px',
      height: 40,

    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
  },
  Textfield:
  {
    width: "100%",
    '& .MuiOutlinedInput-root': {
      borderRadius: '18px',
      height: 40,

    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
  },
  Button: {

    mt: 3,
    borderRadius: 5
  },
  Link: {
    textDecoration: "none",
    marginTop: 20,
    textAlign: "center"
  }

}
function Register() {




  return (
    <Stack
      mt={15}
      alignItems={"center"}
      height={"auto"}
      width={"100%"}
      pb={2}
    >
      <Grid
        spacing={2}
        container
        width="80%"
        height={"100%"}




      >
        <Grid
          item
          md={5}
          xs={11}
          sx={sx.grid1}

        >

          <CardMedia
            image='./assets/celeb.png'
            sx={sx.CardMedia}


          />
        </Grid>



        <Grid
          item
          md={5}
          xs={11}


        >
          <Stack
            component={"form"}
            width={"100%"}
          >
            <Typography
              variant='h4'

              textTransform={"capitalize"}
              mb={3}
              color={"primary"}
              fontWeight={500}
            >
              unlock exclucive benifits
            </Typography>

            <Typography

              mt={2}
              mb={1}
              ml={1}
              variant="body1" color="initial"
            >
              phone number
            </Typography>
            <Stack
              direction={"row"}
              width={"100%"}
              justifyContent={"space-between"}
              gap={2}
            >


              <CountrySelect />
              <TextField
                type='number'

                color="secondary"
                variant="outlined"
                placeholder='9067547610'
                sx={
                  sx.miniTextfield

                }
              />

            </Stack>
            <Typography
              ml={1}
              mt={3}
              mb={1}
              variant="body1" color="initial"
            >
              name
            </Typography>
            <TextField


              color="secondary"
              variant="outlined"
              sx={sx.Textfield}
            />
            <Typography
              ml={1}
              mt={3}
              mb={1}
              variant="body1" color="initial"
            >
              email [option]
            </Typography>
            <TextField


              color="secondary"
              variant="outlined"
              sx={sx.Textfield}
            />
            <Button color='primary' variant="contained" sx={sx.Button
            }>
              <Typography
                textTransform={"uppercase"}
                fontSize={18}
                fontWeight={550}
                letterSpacing={1}

                variant="body1" color="#fff"

              >
                continue
              </Typography>
            </Button>
            <Typography
              textTransform={"capitalize"}
              fontSize={10}

              letterSpacing={0.5}
              mt={2}

              variant="body1" color="black"
            >
              get ready to recive a secret code (otp) on your phone
            </Typography>
            <Link
              style={sx.Link}
              to={"/signin"}
            >
              <Typography
                color={"primary"}
              >
                already have an account?
              </Typography>

            </Link>
          </Stack>

        </Grid>
        <Grid
          item
          md={5}
          xs={11}
          sx={sx.grid3}

        >
          <CardMedia
            image='./assets/celeb.png'
            sx={sx.CardMedia}


          />
        </Grid>


      </Grid>

    </Stack>
  )
}

export default Register