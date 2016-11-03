var playlist = {
  "beyonce": "irreplaceable",
  "thomas": "ocean"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
