# encoding: UTF-8
class Participation < ActiveRecord::Base
	attr_accessible :judge_id,:award_id
	belongs_to :judge	
	belongs_to :award
end
