import React, { useContext } from 'react'
import { Stack, Typography, CardMedia } from "@mui/material"
import Nav from '../reusable/Nav'




const sx = {
  Stack: {
    height: {
      xs: "50vh",
      md: "70vh"
    }
  },
  CardMedia: {
    objectFit: "contain"
  }
}

function ErrorPage() {

  return (
    <>
      <Nav
        home={true}
      />
      <Stack
        color={"primary.main"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={sx.Stack}
        minHeight={"80vh"}
        mt={3}
      >

        <CardMedia
          component={"img"}
          height={"60%"}
          width={"100%"}
          sx={sx.CardMedia}
          src={"/assets/noPageLr.png"}
          about='not found'

        />

        <Typography
          component={"h4"}

          variant='h4'
          textTransform={"capitalize"}
          textAlign={"center"}

          color={"primary.main"}


        >
          not found !
        </Typography>

      </Stack>



    </>
  )
}

export default ErrorPage