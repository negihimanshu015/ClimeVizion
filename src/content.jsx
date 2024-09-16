import "./index.css";
import "./styles/content.css";

function Content() {
  return (
    <div className="content">
        <div className="columns">
            <div className="column is-one-quarter center">
                <div className="card">
                    <div className="box p-6">
                    <p className=" p-3 m-3">Location : </p>
                    <input class="input" type="text" placeholder="Text input" />
                    <p className="p-3 m-3">Time-Period : </p>                    
                    <button className="button m-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Content;
