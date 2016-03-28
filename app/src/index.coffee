FlickrService  = require './services/FlickrService'

FlickrService.getImage 'sunrise', (images) ->
    console.log images
