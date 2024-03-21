import { useState } from "react";
import "./App.css";
import blob from "./Images/blob.png";
import Menu from "./Pages/Menu";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isCount, setIsCount] = useState(0)
  const [isCorrect, setIsCorrect] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const [isQuestion, setIsQuestion] = useState()


   function starting() {
    setIsStarted(i => !i)
   }




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
            <Menu 
            
            starting={starting}/>
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
