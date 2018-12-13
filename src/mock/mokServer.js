import Mock from "mockjs"
import msite from "./msite.json"
import classify from "./category.json"
import shiwu from "./shiwu.json"




//暴露接口文档
Mock.mock("/msite",{code:0,msite})

//暴露接口文档
Mock.mock("/classify",{code: 0,classify})


//暴露接口文档
Mock.mock("/shiwu",{code: 0,shiwu})
