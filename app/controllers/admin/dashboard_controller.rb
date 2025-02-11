class Admin::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index@projects = Admin::Project.all
  end
end