const Path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST_DIR = Path.resolve(__dirname, "build");
const SRC_DIR = Path.resolve(__dirname);


module.exports = {
    entry: ["@babel/polyfill","./src/scripts/index.js"],
    output: {
        filename: "[name].bundle.js",
        path: DIST_DIR
    },
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        disableHostCheck: true,
        host: "sportlocal.drf.com"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: [/\.jsx$/, /\.js$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
                    ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: `${DIST_DIR}/assets/fonts/`,
                        publicPath: "/"
                    }
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: `${DIST_DIR}/assets/images/`,
                        publicPath: "/"
                    }
                }
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin([
            {
                from: `${SRC_DIR}/assets/`,
                to:`${DIST_DIR}/assets/`
            } 
        ]),
        new MiniCssExtractPlugin({
            filename: "styles/style.css"
        }),
    ]
}