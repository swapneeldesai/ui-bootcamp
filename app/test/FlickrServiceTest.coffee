proxyquire = require('proxyquire').noCallThru()
gateway = {
  getImages: jasmine.createSpy('gateway.getImages')
  }

FlickrService = proxyquire('../src/services/FlickrService',
                  {'../gateways/FlickrGateway': gateway})

describe "FlickrService", () ->

  it "should get Images for given query", () ->
    callback = () ->

    FlickrService.getImages('sunrise', callback)
    expect( gateway.getImages ).toHaveBeenCalled()
