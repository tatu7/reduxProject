import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const AddSong = (props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return props.addSongAction({ name, time, author });
        }}
        className="ui form container"
      >
        <div className="field">
          <label>Song Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="first-name"
            placeholder="Song Name"
          />
        </div>
        <div className="field">
          <label>Song Time</label>
          <input
            onChange={(e) => setTime(e.target.value)}
            type="text"
            name="last-name"
            placeholder="Song Time"
          />
        </div>
        <div className="field">
          <label>Song Author</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="last-name"
            placeholder="Song Author"
          />
        </div>
        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
const getMyState = (state) => state;
export default connect(getMyState, { addSongAction })(AddSong);
