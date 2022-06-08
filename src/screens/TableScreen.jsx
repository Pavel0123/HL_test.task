import "./TableScreen.css"
import { useState,useEffect } from "react";
import Table from "../components/Table";
import jsonData from "../example-data.json";


function TableScreen() {

  //state that store currect view
  const [view, setView] = useState();

  //runs when component loaded 
  useEffect(() => {
    setView(Table(jsonData))
  },[])

  //render whole hierarchy table 
  return (
    <div className="TableScreen">
      {view}
    </div>
  );
}


export default TableScreen;
