class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :title
      t.text :desc
      t.string :picture
      t.string :url
      t.integer :category_id

      t.timestamps
    end
  end
end
