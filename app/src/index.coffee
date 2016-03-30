FlickrService  = require './services/FlickrService'
ResultsView = require './views/searchview'

FlickrService.getImage 'landscapes', (images) ->
    ResultsView.render "#results-view", "#contents", images

