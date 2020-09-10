import Mock from "mockjs"
import Ala from "./ala"

//mock接口
//三个参数 url地址 请求类型 需要请求的接口
//对url请求进行拦截

//需要用到正则表达式
Mock.mock(/\/Ala\/info/,"get",Ala)