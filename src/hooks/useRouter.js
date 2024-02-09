import {
    createBrowserRouter,
  
  
  } from "react-router-dom";
  import Home from "../components/Home";
  import ErrorPage from "../components/ErrorPage";
  import Register from "../components/Register";
  import Login from "../components/Login";
  import Nav from "../reusable/Nav";

  let router = createBrowserRouter([
  
  {
    path: "*",
    element: <>
    <Nav home={
      false
    }/>
      <ErrorPage  />
    </>
  },
  {
    path: "/",
    element: <>
    <Nav home={
      false
    }/>
      <Home />
    </>
  },
  {
    path: "/signup",
    element: <>
    <Nav home={
      false
    }/>
      <Register />
    </>
  },
  {
    path: "/signin",
    element: <>
    <Nav home={
      false
    }/>
      <Login />
    </>
  },

  
  ])
  
  
  
  export default {
    router
  }