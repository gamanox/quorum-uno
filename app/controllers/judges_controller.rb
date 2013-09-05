# encoding: UTF-8
class JudgesController < ApplicationController
  def index
    @page=1
    if(!params[:page].blank?)
      @page=params[:page].to_i
    end
    @limit=1
    @categorias = Classification.find(:all)
    @premios = Award.find(:all)
    @az=-1
    @classe=0
    @award=0
    @judges=Judge.paginate(:page => params[:page], :per_page => 5)
    if(@judges.count%5>0)
      @limit=(@judges.count/5)+1
    else
      @limit=(@judges.count/5)
    end
    if(!params[:AZ].blank?)
      @az=params[:AZ].to_i==1
      if(params[:AZ].to_i==1)
        @judges=Judge.order("name ASC").paginate(:page => params[:page], :per_page => 5)
        if(@judges.count%5>0)
          @limit=(@judges.count/5)+1
        else
          @limit=(@judges.count/5)
        end
      else
        @judges=Judge.order("name DESC").paginate(:page => params[:page], :per_page => 5)
        if(@judges.count%5>0)
          @limit=(@judges.count/5)+1
        else
          @limit=(@judges.count/5)
        end
      end
    end
    if(!params[:class].blank?)
      @classe=params[:class].to_i
      @judges=Judge.where("classification_id=?",params[:class].to_i).paginate(:page => params[:page], :per_page => 5)
      if(@judges.count%5>0)
        @limit=(@judges.count/5)+1
      else
        @limit=(@judges.count/5)
      end
    end
    if(!params[:award].blank?)
      @award=params[:award].to_i
      @judges=Judge.joins(:participations).where(participations:{award_id: params[:award].to_i}).paginate(:page => params[:page], :per_page => 5)
      if(@judges.count%5>0)
        @limit=(@judges.count/5)+1
      else
        @limit=(@judges.count/5)
      end
    end
    respond_to do |format|
      format.html
      format.js
    end
  end
  def detail
    @page=1
    if(!params[:page].blank?)
      @page=params[:page].to_i
    end
    @limit=1
    @categorias = Classification.find(:all)
    @premios = Award.find(:all)
    @az=-1
    @classe=0
    @award=0
    @judges=Judge.paginate(:page => params[:page], :per_page => 5)
    if(@judges.count%5>0)
      @limit=(@judges.count/5)+1
    else
      @limit=(@judges.count/5)
    end
    if(!params[:AZ].blank?)
      @az=params[:AZ].to_i==1
      if(params[:AZ].to_i==1)
        @judges=Judge.order("name ASC").paginate(:page => params[:page], :per_page => 5)
        if(@judges.count%5>0)
          @limit=(@judges.count/5)+1
        else
          @limit=(@judges.count/5)
        end
      else
        @judges=Judge.order("name DESC").paginate(:page => params[:page], :per_page => 5)
        if(@judges.count%5>0)
          @limit=(@judges.count/5)+1
        else
          @limit=(@judges.count/5)
        end
      end
    end
    if(!params[:class].blank?)
      @classe=params[:class].to_i
      @judges=Judge.where("classification_id=?",params[:class].to_i).paginate(:page => params[:page], :per_page => 5)
      if(@judges.count%5>0)
        @limit=(@judges.count/5)+1
      else
        @limit=(@judges.count/5)
      end
    end
    if(!params[:award].blank?)
      @award=params[:award].to_i
      @judges=Judge.joins(:participations).where(participations:{award_id: params[:award].to_i}).paginate(:page => params[:page], :per_page => 5)
      if(@judges.count%5>0)
        @limit=(@judges.count/5)+1
      else
        @limit=(@judges.count/5)
      end
    end
    respond_to do |format|
      format.html
      format.js
    end
  end
end
