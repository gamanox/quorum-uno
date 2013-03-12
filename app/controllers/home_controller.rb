class HomeController < ApplicationController
  respond_to :html, :js
  def index
    @news = Content.where("category_id = 1").limit(2).order("created_at DESC")
    @events = Content.where("category_id = 2").limit(2).order("created_at DESC")
    @juries = Content.where("category_id = 5").order("created_at DESC")
  end

  def content
    @section = Content.where("category_id = #{params[:id]}").order("created_at DESC")
    @news = Content.where("category_id = 1").limit(2).order("created_at DESC")
    @events = Content.where("category_id = 2").limit(2).order("created_at DESC")
    if params[:article]
      @content = @section.where("id = #{params[:article]}")
    else
      @content = @section
    end
  end
end