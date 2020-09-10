module.exports={
    //禁用ESlint
    lintOnSave:false,
    //根据环境配置路径
    publicPath:process.env.NODE_ENV ==="production" ? "./":"/",

    //解决跨域问题
    //  devServer:{
    //         proxy:{
    //             '/api': {
    //                 target: `http://127.0.0.1:3000/api/`,
    //                 changeOrigin: true,
    //                 pathRewrite: {
    //                     '^/api': ''
    //                 }
    //             }
    //         },
    //         // headers: {
    //         //     'Access-Control-Allow-Origin': '*',
    //         // } 
    // },
    
    
}