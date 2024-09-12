import "./earth.css";
import Earth from "./Components/earth";

function App() {
  return (
    <main className="main">
      <h1 className="title is-size-1">ClimeVizion</h1>      
      <Earth />
      <div className="center">
      <button className="button is-white is-outlined is-large is-rounded ">Login &#8594;</button>
    </div>                
    </main>
  );
}

export default App;
