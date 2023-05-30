const NODE_ENV = process.env.NODE_ENV;
var path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir)
}
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app:  NODE_ENV == 'development' ? './src/index.js' : './src/lib/index.js', //多个组件,
  },
  output: {
    // path: path.resolve(__dirname, './dist'), //环境不对
    // publicPath: '/dist/',
    filename: 'webpack-plugin.js',
    library: 'webpack-plugin', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // 指定输出格式
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        include: [resolve('src'), resolve('lib')]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        // options: {
        //   loaders: {
        //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //     // the "scss" and "sass" values for the lang attribute to the right configs here.
        //     // other preprocessors should work out of the box, no loader config like this necessary.
        //     'scss': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader'
        //     ],
        //     'sass': [
        //       'vue-style-loader',
        //       'css-loader',
        //       'sass-loader?indentedSyntax'
        //     ]
        //   }
        //   // other vue-loader options go here
        // }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    }
    // alias: {
    //   vue$: 'vue/dist/vue.esm.js',
    //   '@assets': path.resolve('./src/assets'),
    //   '@templates': path.resolve('./src/templates'),
    //   '@utils': path.resolve('./src/utils'),
    //   '@components': path.resolve('./src/components'),
    // },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack-plugin",
      filename: "index.html",
      template: path.resolve(__dirname, "./public/index.html"),
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#4285f4",
      },
    })
  ],
  devServer: {
    // historyApiFallback: true,
    // noInfo: true
    // overlay: true //自动调试
    port: 8080
  }
  // devServer: {
  //   host: "localhost",
  //   port: 8080
  // },
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }