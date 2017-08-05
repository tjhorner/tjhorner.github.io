var load = data => {
  $("#song-name").text(data.lastfm.track)
  $("#song-artist").text(data.lastfm.artist)
}