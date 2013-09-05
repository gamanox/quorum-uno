# encoding: UTF-8
class Award < ActiveRecord::Base
	attr_accessible :year,:judges,:participations
	has_many :participations
	has_many :judges, :through=> :participations
end
