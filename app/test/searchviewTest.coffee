jasmine = require('jasmine-node')
jsdom = require('jsdom')
jQuery = require('jquery').create()


ResultsView = require '../src/views/searchview'


describe "search view template", () ->
    setUpHTMLFixture = () ->
        loadFixtures('<script id="results-view" type="text/x-handlebars-template">{{#each images}}<div class="card"><div class="card-image"><img src="{{url}}" alt=""/></div><div class="card-header">First Card</div><div class="card-copy"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p></div></div>{{/each}}</script><div class="cards" id="contents"></div>');

    beforeEach ->
        setUpHTMLFixture()
        return

    it "should return html", () ->
        obj = 
            images: [
                {"id": "1",  "title": "title", "url": "http://someurl/"},
                {"id": "2",  "title2": "title2", "url": "http://someurl/2"}
            ]

        ResultsView.render("#results-view", "#contents", obj)
        expect( $("#contents").html()).toBe "Hello World"
