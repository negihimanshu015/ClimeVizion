import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/earth.css";
import Earth from "./Components/earth";

function Front() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/climate");
  };

  return (
    <main className="main">
      <h1 className="title is-size-1">ClimeVizion</h1>
      <Earth />
      <div className="center">
        <button
          className="button is-white is-outlined is-large is-rounded"
          onClick={handleEnter}
        >
          Enter &#8594;
        </button>
      </div>
    </main>
  );
}

export default Front;
