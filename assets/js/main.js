// old school cool
window.onload = async () => {
  const res = await fetch("https://whereis.tjhorner.nyc/api/v1/location")
  const location = await res.json()
  if(!location.search_query) return
  current_location.innerText = location.search_query
  current_location.title = "Yes, this is live!"
}