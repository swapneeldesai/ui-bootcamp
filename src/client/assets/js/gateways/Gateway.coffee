request = require('request')

require('../libs/flickrapi.dev.js')

api_key = 'API KEY'

class Gateway
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
    # request 'http://localhost:3000/flicker.json', (error, response, body) ->
    #   callback JSON.parse(body)

module.exports = new Gateway()
