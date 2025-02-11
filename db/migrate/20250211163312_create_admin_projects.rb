class CreateAdminProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :admin_projects do |t|
      t.string :title
      t.text :description
      t.string :media

      t.timestamps
    end
  end
end
