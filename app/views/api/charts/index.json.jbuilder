json.array! (@charts) do |chart|
  json.id chart.id
  json.title chart.title
  json.x_name chart.x_name
  json.y_name chart.y_name
  json.dataset_id chart.dataset_id
  json.x_data chart.x_data
  json.y_data chart.y_data
  json.user_id chart.user_id
  json.chartType chart.chartType
end
