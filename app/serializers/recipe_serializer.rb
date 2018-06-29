class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :steps, :link
  has_one :user
end
