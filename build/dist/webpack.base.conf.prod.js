"use strict";var path=require("path"),utils=require("./utils"),config=require("../config"),vueLoaderConfig=require("./vue-loader.conf");function resolve(e){return path.join(__dirname,"..",e)}module.exports={context:path.resolve(__dirname,"../"),entry:{app:"./src/main.js"},output:{path:config.build.assetsRoot,filename:"[name].js",publicPath:"production"===process.env.NODE_ENV?config.build.assetsPublicPath:config.dev.assetsPublicPath},resolve:{extensions:[".js",".vue",".json"],alias:{vue$:"vue/dist/vue.esm.js","@":resolve("src")}},module:{rules:[{test:/\.vue$/,loader:"vue-loader",options:vueLoaderConfig},{test:/\.js$/,loader:"babel-loader",include:[resolve("src"),resolve("test"),resolve("node_modules/webpack-dev-server/client")]},{test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,loader:"url-loader",options:{limit:1e4,name:utils.assetsPath("img/[name].[hash:7].[ext]")}},{test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,loader:"url-loader",options:{limit:1e4,name:utils.assetsPath("media/[name].[hash:7].[ext]")}},{test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,loader:"url-loader",options:{limit:1e4,name:utils.assetsPath("fonts/[name].[hash:7].[ext]")}}]},node:{setImmediate:!1,dgram:"empty",fs:"empty",net:"empty",tls:"empty",child_process:"empty"}};