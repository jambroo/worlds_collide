class Trip < ApplicationRecord
  validates :src, :presence => true
  validates :dest, :presence => true
end
