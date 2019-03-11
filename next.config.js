const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withReactSvg = require('next-react-svg')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  withTypescript,
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, 'src/assets/images')
    }
  ],
  [
    withCSS,
    {
      cssModule: true
    }
  ]
])
