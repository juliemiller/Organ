class Track < ActiveRecord::Base
  serialize :roll, Array
  validates :name, :roll, presence: true
end
