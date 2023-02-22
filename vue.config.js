const { defineConfig } = require('@vue/cli-service')

const plugins = []

if (process.env.NODE_ENV === 'production') {
  
  const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')
  const { join } = require('path')
  
	plugins.unshift(
		new PrerendererWebpackPlugin({
			routes: ["/", "/avisos"]
		})
	)
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins
  }
})
