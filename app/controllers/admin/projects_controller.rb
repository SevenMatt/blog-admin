class Admin::ProjectsController < ApplicationController
  before_action :authenticate_user!

  # GET /admin/projects or /admin/projects.json
  def index
    @admin_projects = Admin::Project.all
  end

  # GET /admin/projects/1 or /admin/projects/1.json
  def show
  end

  # GET /admin/projects/new
  def new
    @admin_project = Admin::Project.new
  end

  # GET /admin/projects/1/edit
  def edit
  end

  # POST /admin/projects or /admin/projects.json
  def create
    @admin_project = Admin::Project.new(admin_project_params)

    respond_to do |format|
      if @admin_project.save
        format.html { redirect_to @admin_project, notice: "Project was successfully created." }
        format.json { render :show, status: :created, location: @admin_project }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @admin_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/projects/1 or /admin/projects/1.json
  def update
    respond_to do |format|
      if @admin_project.update(admin_project_params)
        format.html { redirect_to @admin_project, notice: "Project was successfully updated." }
        format.json { render :show, status: :ok, location: @admin_project }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @admin_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/projects/1 or /admin/projects/1.json
  def destroy
    @admin_project.destroy!

    respond_to do |format|
      format.html { redirect_to admin_projects_path, status: :see_other, notice: "Project was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_project
      @admin_project = Admin::Project.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def admin_project_params
      params.expect(admin_project: [ :title, :description, :media ])
    end
end
