HelloWorld = require '../src/index'

describe "Index", () ->

  it "index", () ->
    helloWorld = new HelloWorld();
    expect( helloWorld.message() ).toBe "Hello World"
