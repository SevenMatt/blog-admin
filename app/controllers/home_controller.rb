class HomeController < ApplicationController
  def index
    @projects = Admin::Project.all
  end 
end