/*
 * @Author: yh 
 * @Date: 2021-05-01 19:46:14 
 * @Last Modified by:   yh 
 * @Last Modified time: 2021-05-01 19:46:14 
 */

const SETUSERINFO = "SETUSERINFO";
export const setUserInfoAction = (data = {}) => {
  return {
    type: SETUSERINFO,
    data
  }
}