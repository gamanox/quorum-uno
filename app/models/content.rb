class Content < ActiveRecord::Base
  attr_accessible :desc, :category_id, :picture, :title, :url
  
  belongs_to :category
  
end