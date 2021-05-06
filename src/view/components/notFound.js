/*
 * @Author: yh 
 * @Date: 2021-05-01 12:01:49 
 * @Last Modified by: yh
 * @Last Modified time: 2021-05-06 13:10:48
 * 404页面
 */

import React from 'react';
import { Result, Button } from 'antd';
import {withRouter} from "react-router-dom";

function NotFound(props) {
  const returnLogin = ()=>{
    props.history.push("/")
  }
  return (
    <div className="yh-not-found">
      <Result
        status="404"
        title="404"
        subTitle="抱歉，页面它不小心迷路了"
        extra={<Button type="primary" onClick={returnLogin}>返回</Button>}
      />
      <style>
        {
          `
            .yh-not-found{
              width:100%;
              height:100%;
              display:flex;
              align-items: center;
              justify-content: center;
            }

          `
        }
      </style>
    </div>
  )
}
export default withRouter(NotFound)
