class CreateJudges < ActiveRecord::Migration
  def change
    create_table :judges do |t|
    	t.string :name
    	t.text :bio
    	t.string :work
    	t.string :location
    	t.string :sn1_web
    	t.string :sn2_mail
    	t.string :sn3_twitter
    	t.string :sn4_facebook
    	t.string :sn5_linkedin
    	t.string :link1
    	t.string :link2
    	t.string :link3
    	t.integer :classification_id
    	t.string :profilepic_file_name
    	t.string :profilepic_content_type
    	t.integer :profilepic_file_size
    	t.datetime :profilepic_updated_at
    	t.string :picture1_file_name
    	t.string :picture1_content_type
    	t.integer :picture1_file_size
    	t.datetime :picture1_updated_at
    	t.timestamps
    end
  end
end
