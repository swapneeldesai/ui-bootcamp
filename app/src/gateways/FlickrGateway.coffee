require('../libs/flickrapi.js')

api_key = 'e51a0f42f00f4d762fd2ac82b0cf91c7'

class FlickrGateway
  constructor: () ->
    @flickr = new Flickr {
      api_key: api_key,
      format: 'json'
    }
  getImage: (query, callback) ->
    @flickr.photos.search {
      text: query,
      extras: 'url_m'
    }, (error, response) ->
      callback response

module.exports = new FlickrGateway()
