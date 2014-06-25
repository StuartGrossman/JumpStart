class Droptablecause < ActiveRecord::Migration
  def change
  	drop_table :causes
  end
end
