const load = async () => {
  const query = "{ location { searchQuery } nowPlaying { isPlaying track { title link artists { name } } album { imageUrl } } }"
  
  const res = await fetch("https://api.horner.tj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query
    })
  })
  
  const { data } = await res.json()
  
  if (data.location && data.location.searchQuery) {
    current_location.innerText = data.location.searchQuery
    current_location.title = "Yes, this is live!"
  }

  if (data.nowPlaying && data.nowPlaying.isPlaying) {
    album_art.src = data.nowPlaying.album.imageUrl
    track_title.innerText = track_title.title = data.nowPlaying.track.title
    track_artist.innerText = track_artist.title = data.nowPlaying.track.artists.map(a => a.name).join(", ")
    now_playing.className += " animated fadeInLeft active"
    now_playing.href = data.nowPlaying.track.link
  }
}

window.onload = load