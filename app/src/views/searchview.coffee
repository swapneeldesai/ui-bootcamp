handleBars = require("handlebars")
$ = require("jquery")

class ResultsView
  @render: (templatename, root, model) ->
    template = handleBars.compile($(templatename).html())
    $(root).html(template(images: model))

module.exports = ResultsView
