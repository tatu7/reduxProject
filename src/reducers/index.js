import { combineReducers } from "redux";

const songList = [
  {
    name: "Uzbek",
    time: "3:12",
    author: "Uzim",
  },
  {
    name: "Kazak",
    time: "4:12",
    author: "Jelsinbay",
  },
  {
    name: "USA",
    time: "5:12",
    author: "Alex",
  },
  {
    name: "Russia",
    time: "6:12",
    author: "Sergey",
  },
];
const songListRerucer = (history = songList, song) => {
  return history;
};
const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type === "SELECTOR") {
    return (history = selectedSong.payload);
  }
  return history;
};
const allReducers = combineReducers({
  longList: songListRerucer,
  selectedSong: selectSongReducer,
});
export default allReducers;
