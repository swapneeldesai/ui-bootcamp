require('../libs/flickrapi.js')

api_key = 'API KEY'

class FlickrGateway
  constructor: () ->
    @flickr = new Flickr {
      api_key: api_key,
      format: 'json'
    }
  getImage: (query, callback) ->
    @flickr.photos.search {
      text: query,
      extras: 'url_o'
    }, (error, response) ->
      callback response

module.exports = new FlickrGateway()
