import { combineReducers } from "redux";
import selectSongReducer from "./selectSongRedusers";
import songListRerucer from "./songListReducer";

const allReducers = combineReducers({
  songList: songListRerucer,
  selectedSong: selectSongReducer,
});
export default allReducers;
