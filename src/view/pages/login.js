/*
 * @Author: yh 
 * @Date: 2021-05-01 11:50:54 
 * @Last Modified by: yh
 * @Last Modified time: 2021-05-01 19:50:27
 */

import React, { useState, useEffect } from 'react';
import "./../../style/login.scss";
import { Input, Button, message } from 'antd';
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "../../redux/action/setUserInfoAction";
export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const inputChange = (e, type)=>{
    let value = e.target.value.trim();
    if (type=="userName") {
      setUserName(value)
    } else {
      setPassword(value)
    }
  }
  const loginClick = () => {
    if (!userName) {
      message.warning("请输入账号！");
      return false
    }
    if (!password) {
      message.warning("请输入密码！");
      return false
    } else if (password&&password!="admin") {
      message.warning("密码不正确，请重新输入！");
      props.history.push("/error")
      return false
    }
    props.history.push("/loading");
    let userInfo = {
      userName,
      password
    }
    dispatch(setUserInfoAction(userInfo))
  };
  return (
    <div className="yh-login-wrap">
      <div
        className="yh-login-main"
      >
        <div className="yh-login-title">我的App</div>
        <div className="yh-login-content">
          <div className="yh-login-item">
            <span className="yh-label">账号：</span>
            <Input 
              allowClear
              onChange={(e)=>{inputChange(e,"userName")}}
            />
          </div>
          <div className="yh-login-item">
            <span className="yh-label">密码：</span>
            <Input 
             onChange={(e)=>{inputChange(e,"password")}}
            />
          </div>
        </div>
        <div className="yh-login-btn">
          <Button
            type="primary"
            onClick={loginClick}
          >
            登录
          </Button>
        </div>
      </div>
    </div>

  )
}
