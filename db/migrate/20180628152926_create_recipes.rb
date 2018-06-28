class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :steps
      t.string :link

      t.timestamps
    end
  end
end
