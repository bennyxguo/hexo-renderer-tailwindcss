'use strict'

var renderer = require('./libs/postcss/renderer')

hexo.extend.renderer.register('css', 'css', renderer)
