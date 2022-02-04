import React from "react";
import "../layout.css";

const Main = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card">
            <img src={item.image} alt="character" />
            <div className="card-body">
              <h4 className="character-name text-center">{item.name}</h4>
              <hr />
              <p className="card-text">Status: {item.status}</p>
              <p className="card-text">Species: {item.species}</p>
              <p className="card-text">Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
