import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongList(props) {
  const renderList = () => {
    return props.songList.map((val, index) => {
      return (
        <div key={index} className="card" style={{ marginTop: "40px" }}>
          <div className="content">
            <img
              className="right floated mini ui image"
              src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg"
            />
            <div className="header">{val.name}</div>
            <div className="meta">{val.time}</div>
            <div className="description">{val.author}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                onClick={() => props.selectSong(val)}
                className="ui basic green button"
              >
                Select Song
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="ui cards ">{renderList()}</div>
    </div>
  );
}
const getMyState = (state) => state;
export default connect(getMyState, { selectSong })(SongList);
