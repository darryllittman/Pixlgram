# json.array! @photos, :id, :user_id, :caption, :location, :url

json.array! @photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.caption photo.caption
  json.location photo.location
  json.url photo.url
  json.comments photo.comments
end
