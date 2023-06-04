const NODE_ENV = process.env.NODE_ENV;
var path = require("path");
function resolve (dir) {
  return path.join(__dirname, dir)
}
const { VueLoaderPlugin } = require('vue-loader') // webpack5需要降低版本如果在vue2中使用vue-loader
const HtmlWebpackPlugin = require("html-webpack-plugin") // html模版使用

module.exports = {
  entry: {
    app:  './src/example/main.js', //多个组件,
  },
  output: {
    filename: 'webpackPlugin.js',
    library: 'webpackPlugin', // 指定的就是你使用require时的模块名
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
      title: "webpackPlugin",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/example/index.html"),
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#4285f4",
      },
    })
  ],
  devServer: {
    port: 8080
  }
}