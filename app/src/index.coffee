FlickrService  = require './services/FlickrService'

FlickrService.getImages 'sunrise', (images) ->
    console.log images
