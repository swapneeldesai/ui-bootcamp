require('../libs/flickrapi.js')

api_key = 'API KEY'

class FlickrGateway
  constructor: () ->
    @flickr = new Flickr {
      api_key: api_key,
      format: 'json'
    }
  getImages: (query, callback) ->
    @flickr.photos.search {
      text: query,
      extras: 'url_o'
    }, (error, response) ->
      callback response

instance = null
get = () ->
  instance ?= new FlickrGateway();

module.exports = get();
