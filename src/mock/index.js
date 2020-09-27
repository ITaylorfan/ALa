import Mock from "mockjs"
import Ala from "./ala"
import UserInfo from "./userInfo"
import detailUserInfo from "./detailUserInfo"
import checkHistory from "./checkHistory"
import upload from "./upload"
import accountManagement from "./accountManagement"
import choiceUser from "./choiceUser"
//mock接口
//三个参数 url地址 请求类型 需要请求的接口
//对url请求进行拦截

//需要用到正则表达式
Mock.mock(/\/Ala\/info/,"get",Ala)

Mock.mock(/\/Ala\/UserInfo/,"get",UserInfo)

Mock.mock(/\/Ala\/DetailUserInfo/,"get",detailUserInfo)

Mock.mock(/\/Ala\/CheckHistory/,"get",checkHistory)

//我的发布
Mock.mock(/\/Ala\/upload/,"get",upload)

//账号管理
Mock.mock(/\/Ala\/accountManagement/,"get",accountManagement)

Mock.mock(/\/Ala\/choiceUser/,"get",choiceUser)
//模拟一个post请求

// Mock.mock(/\Ala\/InfoInput/,"post",infoInput)