FlickrGateway = require('../gateways/FlickrGateway')
Image = require('../models/Image')

class FlickrService
  getImage: (query, callback) ->
    @callback = callback
    FlickrGateway.getImage query, @processResponse

  processResponse: (response) =>
    photos = response.photos.photo.map (photo) -> new Image(photo)
    @callback photos.filter (photo) -> photo.isValid()

module.exports = new FlickrService()
