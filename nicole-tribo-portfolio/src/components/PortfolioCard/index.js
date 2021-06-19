import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
          <div className="column is-4">
            <div className="card is-flexible">
              <div className="card-image">
                <figure className="image is-2by2">
                  <img alt={props.name} src={props.image} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content has-text-centered">
                  <h4>{props.name}</h4>
                  <p>{props.description}</p>
                  <div className="button is-$blue: hsl(229, 53%, 53%)">
                    <a href={props.view}>Application</a>
                  </div>
                  <div className="button">
                    <a href={props.repository}>GitHub Repository</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default PortfolioCard;
