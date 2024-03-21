import { useState } from "react";
import "./App.css";
import blob from "./Images/blob.png";
import Menu from "./Pages/Menu";

function App() {
  const [isStarted, setIsStarted] = useState(true);
  return (
    <div className="App">
      <div className="Appcontainer">
        <div className="Appcontent">
          {isStarted ? (
            <div className="startcontent">
              <div className="endcontent">
            <button className="checkanswer"> check Answer</button>
              </div>
            </div>
          ) : (
            <Menu />
          )}
        </div>
        <div className="yellowblob">
          <img className="blobimg" alt="blob" src={blob} />
        </div>
      </div>
    </div>
  );
}

export default App;
