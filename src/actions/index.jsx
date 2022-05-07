export const selectSong = (obj) => {
  return {
    type: "SELECTOR",
    payload: obj,
  };
};

export const addSongAction = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
