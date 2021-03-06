/*
 * @Author: yh 
 * @Date: 2021-05-01 12:24:37 
 * @Last Modified by: yh
 * @Last Modified time: 2021-05-02 11:10:33
 */


import ReactLoading from "react-loading";
import React, { useEffect } from "react";
export default function Loading(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/index");
    }, 500);
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          background: "#282c34",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="lean-mask"
      >
        <div style={{ margin: "100px 100px" }}>
          <span style={{ color: "#fff", margin: "0 0 30px",fontSize:26 }}>页面加载中...</span>
          <ReactLoading type={"bars"} color="#c0c0c0" />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 62,
          }}
        >
          <ReactLoading
            type={"bubbles"}
            color="#fff"
            width="35px"
            height="35px"
          />
        </div>
      </div>
    </>
  );
}
