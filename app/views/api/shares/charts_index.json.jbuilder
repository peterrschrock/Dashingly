json.set! :shareInfo do
  json.datasets Hash[@datasets.map{ |dataset| [dataset.id, dataset]}]
  json.charts @charts
end
