json.type ['h-adr']

json.properties do
  json.street_address [location.street_address]
  json.locality [location.locality]
  json.region [location.region]
  json.postal_code [location.postal_code]
  json.country_name [location.country]
  json.latitude [location.latitude]
  json.longitude [location.longitude]
  json.name [location.formatted_address]
end

json.value location.formatted_address
