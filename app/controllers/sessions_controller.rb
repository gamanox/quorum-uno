class SessionsController < ApplicationController
  def login
  end

  def home
  end

  def profile
  end

  def setting
  end

  def login_attemp
  	if !params[:uname].blank? and !params[:password].blank?
  		usuario=Judge.where("uname='?' and password='?'",params[:uname],params[:password]).first
  		if(defined? usuario and !usuario.blank?)
  			session[:quorum_user_id]=usuario.id
      		redirect_to(:action => 'judges')
      	else
      		render "login"	
      	end
  	else
  		flash[:notice] = "Invalid Username or Password"
      	flash[:color]= "invalid"
  		render "login"
  	end
  end
end
