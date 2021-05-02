/*
 * @Author: yh 
 * @Date: 2021-05-02 11:07:47 
 * @Last Modified by:   yh 
 * @Last Modified time: 2021-05-02 11:07:47 
 */

import React from 'react';
import { useSelector } from "react-redux";
export default function MyHome() {
  const reduxProps = useSelector(
    ({userInfoReducer: { userInfo }}) => {
      return {
        userInfo
      }
    }
  );
  const { userInfo } = reduxProps;
  return (
    <div
      style={{
        height:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent:"center"
      }}
    >
      你好{userInfo.userName}，欢迎来到王者大陆
    </div>
  )
}
