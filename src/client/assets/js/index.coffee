Handlebars    = require 'handlebars'
ImageService  = require './services/ImageService'
imageTemplate = Handlebars.compile require '../partials/images.hb.html'

ImageService.getImage 'sunrise', (images) ->
  document.body.innerHTML = imageTemplate {images: images}
