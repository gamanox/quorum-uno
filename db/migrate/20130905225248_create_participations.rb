class CreateParticipations < ActiveRecord::Migration
  def change
    create_table :participations do |t|
      t.integer :judge_id
      t.integer :award_id
      t.timestamps
    end
  end
end
