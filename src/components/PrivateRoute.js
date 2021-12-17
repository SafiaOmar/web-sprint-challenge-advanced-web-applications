import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";


function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={() => {
    if (localStorage.getItem("token")) {
      return (<Component />)
    } else {
      return <Redirect to='/login' />
    }
  }} />
}


export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute