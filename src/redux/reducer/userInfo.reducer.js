/*
 * @Author: yh 
 * @Date: 2021-05-01 19:47:38 
 * @Last Modified by:   yh 
 * @Last Modified time: 2021-05-01 19:47:38 
 */

const userInfo = {};
export const userInfoReducer=(state=userInfo,{type,data})=>{
  switch (type) {
    case "SETUSERINFO":
      return{
        ...state,
        userInfo:data
      }
    default:
      return state;
  }
}