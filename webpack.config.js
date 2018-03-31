var webpack = require('webpack');
var path = require('path');
var OpenBrowser = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = '8888';

module.exports ={
    entry:{
        main:path.join(__dirname,'src/main.js'),
        // common:['vue']
    },
    output:{
        path: path.join(__dirname,'dist'),
        filename:'build.js'
    },
    resolve:{
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.vue$/,
                loader:'vue-loader'
            },{
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            },{
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }  
        ]
    },
    devServer:{
        
        compress:true,
        port:PORT
    },
    plugins:[
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'common',
        //     filename:'js/common.js'
        // }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'index.html'),
            inject:'body',
            filename:'entry/index.html',
            chunk:['main','common']
        }),
        new OpenBrowser({
            url:`http://localhost:${PORT}/entry/index.html`,
        })
    ]
}