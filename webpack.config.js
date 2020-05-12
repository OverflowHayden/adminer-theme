const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const files = [
    './src/adminer.scss'
];

module.exports = [
    {
        mode: 'development',
        entry: files,
        //devtool: "source-map",
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin({})
            ],
        },
        module: {

            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader?importLoaders=1"
                    ]
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader', options: {
                                import: false,
                                sourceMap: false,
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'postcss-loader', options: {
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'sass-loader', options: {
                                sourceMap: false,
                                sassOptions: {
                                    includePaths: ["node_modules"]
                                }
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new StyleLintPlugin({
                configFile: '.stylelintrc',
            }),
            new MiniCssExtractPlugin({// define where to save the file
                filename: 'adminer.css',
                allChunks: true,
            }),
        ]
    },
]