class ApplicationController < ActionController::Base
  protect_from_forgery
  def authenticate_user
  	if session[:quorum_user_id].nil?
  		redirect_to :action => 'login'
  	end
  end
end
