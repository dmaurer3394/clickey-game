import React from "react";

function Jumbotron(props) {
  return (
    <div className="flex-container">
      <div className="jumbotron">
        <h1 className="display-3">Clicky Game</h1>
        <h3 className="font-weight-light">Click on a picture to play</h3>
        <hr />
        <span className="font-weight-light">
          You get 1 point for each correct guess <strong>but you lose </strong>
          if you click the same picture twice in a round
        </span>
        <hr />
        <p>Score: {props.score}</p>
        <p>Highscore: {props.highscore}</p>
      </div>
    </div>
  );
}

export default Jumbotron;
