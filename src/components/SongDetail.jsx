import React, { Component } from "react";
import { connect } from "react-redux";
class SongDetail extends Component {
  renderDeteil = () => {
    if (this.props.selectedSong.name) {
      return (
        <div>
          <div className="ui card" style={{ marginTop: "40px" }}>
            <div className="image">
              <img src="https://www.schooldrillers.com/st-jairus-stainless-love/st-jairus/" />
            </div>
            <div className="content">
              <p className="header">{this.props.selectedSong.name}</p>
              <div className="meta">
                <span className="date">{this.props.selectedSong.time}</span>
              </div>
              <div className="description">
                {this.props.selectedSong.author}
              </div>
            </div>
          </div>
          ;
        </div>
      );
    } else {
      return <h1 style={{ marginTop: "40px" }}>Loading...</h1>;
    }
  };
  render() {
    return <>{this.renderDeteil()}</>;
  }
}
const getMyState = (state) => state;

export default connect(getMyState)(SongDetail);
