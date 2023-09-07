class HelloWorldController < ApplicationController
  layout 'hello_worlds'

  def index
    @hello_world_props = { name: 'Stranger' }
  end
end
