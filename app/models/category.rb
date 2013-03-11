class Category < ActiveRecord::Base
  attr_accessible :desc, :title, :content_atttributes
  
  has_many :contents
  
  accepts_nested_attributes_for :contents
end
