import React, { useState } from "react";
import AddSong from "./components/AddSong";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
function App(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="ui green basic button "
        style={{ marginTop: "20px", marginLeft: "110px" }}
      >
        Add Song
      </button>
      {show ? <AddSong /> : ""}
      <div class="ui grid container">
        <div className="ten wide column">
          <SongList />
        </div>
        <div className="six wide column">
          <SongDetail />
        </div>
      </div>
    </>
  );
}
export default App;
