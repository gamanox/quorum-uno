# encoding: UTF-8
class Judge < ActiveRecord::Base
	attr_accessible :profilepic,:name,:bio,:work,:location,:sn1_web,:sn2_mail,:sn3_twitter,:sn4_facebook,:sn5_linkedin,:link1,:link2,:link3,:picture1,:picture2,:classification_id,:profilepic_file_name,:profilepic_content_type,:profilepic_file_size,:profilepic_updated_at,:picture1_file_name,:picture1_content_type,:picture1_file_size,:picture1_updated_at,:awards,:participations,:classification_id,:uname,:password
	has_attached_file :profilepic,
	    :styles => {
	    :displaysite1=>"210x210#"},
	    :storage => :s3,
	    :s3_credentials => Rails.root.join('config','s3.yml'),
	    :path => "/judges/:id/:style/:filename"
	has_attached_file :picture1,
	    :styles => {
	    :displaysite1=>"430x210#"},
	    :storage => :s3,
	    :s3_credentials => Rails.root.join('config','s3.yml'),
	    :path => "/judges/:id/covers/:style/:filename"
	belongs_to :classification
	has_many :participations
	has_many :awards, :through=> :participations
end
