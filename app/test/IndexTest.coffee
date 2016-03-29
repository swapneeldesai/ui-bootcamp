HelloWorld = require '../src/HelloWorld'

describe "Index", () ->

  it "index", () ->
    helloWorld = new HelloWorld();
    expect( helloWorld.message() ).toBe "Hello World"
