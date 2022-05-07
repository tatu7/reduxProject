const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type === "SELECTOR") {
    return (history = selectedSong.payload);
  }
  return history;
};
export default selectSongReducer;
