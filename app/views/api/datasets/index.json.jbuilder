json.set!(@datasets) do |dataset|
  json.id dataset.id
  json.title dataset.title
  json.data dataset.title
end

json.datasets do
  @datasets.each do |dataset|
    json.set! dataset.id dataset
  end
end
