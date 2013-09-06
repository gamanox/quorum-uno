class SessionsController < ApplicationController
  def login
    if !params[:uname].blank? and !params[:password].blank?
      usuario=Judge.where("uname=? and password=?",params[:uname],params[:password]).first
      if(defined? usuario and !usuario.blank? and defined? usuario.id)
        session[:quorum_user_id]=usuario.id
        redirect_to :controller=>'judges'
      else
        session[:quorum_user_id]=0
      end
    else
      session[:quorum_user_id]=0
    end
  end

  def login_attempt
  end

  def logout
    session[:quorum_user_id] = 0
    redirect_to :controller=> 'home'
  end
end
