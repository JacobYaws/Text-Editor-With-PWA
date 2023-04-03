const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const WorkBoxPlugin = require('workbox-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    // The entry point for files to be used in the webpage.
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    // Outputs the bundles for the webpage
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // Integrating plugins for the PWA
    plugins: [
      // Helps to create the HTML for the webpage.
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Just Another Text Editor'
      }),
      // Injects the service worker for the webpage.
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
        // swDest: 'service-worker.js',

      }), 
      // Creates the manifest.json for the webpage.
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E.',
        description: 'Take notes offline without having to worry that they won\'t\ update online!',
        background_color: '#7eb4e2',
        theme_color: '#7eb4e2',
        start_url: './',
        publicPath: './',
        inject: true,
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
        fingerprints: false,
      })
    ],

    module: {
      rules: [
        {
          // Used to load CSS
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            // Babel helps with using ES6
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
