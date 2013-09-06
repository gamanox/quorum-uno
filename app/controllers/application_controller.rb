class ApplicationController < ActionController::Base
  protect_from_forgery
  def authenticate_user
  	if session[:quorum_user_id].to_i < 1
  		redirect_to :controller=> 'sessions'
  	end
  end
end
