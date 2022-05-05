const selectSong = (obj) => {
  return {
    type: "SELECTOR",
    payload: obj,
  };
};

export default selectSong;
