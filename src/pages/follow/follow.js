import React from "react";
import Title from "../../components/labels/title/titles";
//ImageSource
import ola from "../../assets/images/ola.jpg";
import SocialMedia from "../../components/social-media/social-media";

import GetGridCircleImages from "../../components/cards/images/circle-image-description";

import "./follow.css";
import "../global.css";

function Follow() {
  var title = { name: "#chat_with_me 💬", description: "know me more" };

  var imagesGrid = GetGridCircleImages([
    [
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
    ],
    [
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
      { src: ola, title: "fdffd", description: "dfifisdfiosd" },
    ],
  ]);

  return (
    <div className="App-header page">
      <Title name={title.name} description={title.description} />

      <div class="follow-container">
        <img src={ola} class="suggestion-image" />
        <div class="form-content">
          <form id="contact-form">
            <div className="form-group" class="control-form">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group" class="control-form">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group" class="control-form">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <p></p>
            <div className="form-group" class="control-form">
              <textarea className="form-control" placeholder="Message" />
            </div>
            <div class="control-form">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div style={{ width: "600px" }}>{imagesGrid}</div>
      </div>
      <div class="footer">
        <div style={{ position: "absolute", left: "50%" }}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Follow;
