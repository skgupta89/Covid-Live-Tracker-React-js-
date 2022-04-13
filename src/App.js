import "./App.css";
import CovidIndia from "./Component/CovidIndia";
import StateWiseData from "./Component/StateWiseData";
import Header from "./Component/Header";
import { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function App() {
  const [data, setData] = useState("india");
  // const [active, setActive] = useState("india");
  // alert (data)

  return (
    <>
      <div className="nav">
        <button
        style={{backgroundColor:data==='india'? 'blue':""}}
          onClick={() => {
            setData("india");
          }}
          className="indiaBtn  btn "
        >
          {" "}
          India Data
        </button>
        <button
           style={{backgroundColor:data==='state'? 'blue':""}}
          onClick={() => {
            setData("state");
          }}
          className="stateBtn btn"
        >
          State Data
        </button>
      </div>
      <div className="main">
        <Header />
        <div className="title">Covid-19 Coronavirous Tracker
        <br/>
      <span style={{color:'blue', textDecoration:'underline'}}>  {data === 'india'? ' Country Data':"State wise Data" } </span></div>
        {data === "india" ? <CovidIndia /> : <StateWiseData />}
      </div>
    </>
  );
}

export default App;
