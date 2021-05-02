/*
 * @Author: yh 
 * @Date: 2021-04-30 15:45:17 
 * @Last Modified by: yh
 * @Last Modified time: 2021-05-02 11:08:02
 * 路由组件
 */

import React from "react";
import { HashRouter as Router, Route, Redirect,Switch ,withRouter} from "react-router-dom";
import MyHome from "./../view/pages/my/myHome"

function HomeRouter(props) {
  console.log(props);
  const root = props.match.url;
  return (
    <Router basename="/">
      <Switch>
        <Route  path={root} component={MyHome} />
        <Redirect to={root} />
      </Switch>
    </Router>
  )  
}
export default withRouter(HomeRouter)
