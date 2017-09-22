class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :src
      t.string :dest

      t.timestamps
    end
  end
end
