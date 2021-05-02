/*
 * @Author: yh 
 * @Date: 2021-04-30 15:45:17 
 * @Last Modified by: yh
 * @Last Modified time: 2021-05-01 12:28:50
 * 路由组件
 */

import React from "react";
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import Login from "./../view/pages/login"
import Home from "./../view/pages/home"
import NotFound from "./../view/components/notFound"
import Loading from "./../view/components/loading";

export default function RouterRelation() {
  const token = sessionStorage.getItem("token")
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={Home} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/error" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )  
}