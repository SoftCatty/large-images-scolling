const path = require("path");

module.exports = {
    // 设置为 "production" 以进行项目构建，或 "development" 以进行实时开发模式
    mode: "development",
    entry: "./app.js", // 指定入口文件
    output: {
        filename: "bundle.js", // 指定输出文件名
        path: path.resolve(__dirname, "dist"), // 指定输出文件夹
    }
};
