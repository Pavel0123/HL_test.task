import "./TableScreen.css"
import { useState,useEffect } from "react";
import CreateAuthenticationToken from "../functions/CreateAuthenticationToken";
import IndividualStatistics from "../functions/IndividualStatistics";
import Competitions from "../functions/Competitions";
import Table from "../components/Table";

//Exported tableScreen component
function TableScreen() {

  const [body, setBody] = useState();
  const [auth, setAuth] = useState();

  const [xg60, setXg60] = useState(false);
  const [c60, setC60] = useState(false);
  const [sogc_pct, setSogc_pct] = useState(false);

  //runs when component loaded and gets auth token
  useEffect(() => {

    const bodyAuth =  {
      "grant_type": "client_credentials",
      "client_id": "john",
      "client_secret": "doe"
    }

    async function getAuth() {
      const auth = await CreateAuthenticationToken(bodyAuth)
      setAuth(auth);

      console.log("Token Generated...") //logs when token is generated
    }
    getAuth();  
  },[])

  //runs when clicked on button load data
  async function setData() {
    setBody(null)
    const data = await getData(auth);
    const array = CreateArray(data);
    setBody(array);
  }

  //function gets specific competition from API
  async function getData(auth) {

    const bodyComp =  {
      "gameState": "5:5",
      "timeOnIce": 600,
      "metrics": [
       xg60 ? "xg60": null,
        c60 ? "c60" : null,
        sogc_pct ? "sogc_pct" : null,
      ]
    }

    //gets all competitions
    const competitions = await Competitions(auth) 

    //chose first one (does not matter)
    const specificCompetition = competitions?.[0].competitions?.[0].uuid; 

    //gets statistics for specific competition
    const data = await IndividualStatistics(bodyComp, specificCompetition, auth) 

    console.log("Data received...") //logs when data is received

    return data;
  }


  //metrics controler
  const handleChangeXg60 = () => {
    setXg60(!xg60);
  };
  const handleChangeC60 = () => {
    setC60(!c60);
  };
  const handleChangeSogc_pct = () => {
    setSogc_pct(!sogc_pct);
  };

  //Menu component 
  const Menu = () => {
    return(
      <div>
        
        <div className="TableScreen__menu">
        <button disabled={!auth} onClick={() => {auth && setData()}}>Load Data</button>
          <input type="checkbox" checked={xg60} onChange={handleChangeXg60}/>
          xg60
          <input type="checkbox" checked={c60} onChange={handleChangeC60}/>
          c60
          <input type="checkbox" checked={sogc_pct} onChange={handleChangeSogc_pct}/>
          sogc_pct
        </div>
  
        {!xg60 && !c60 && !sogc_pct ? "Please choose at least one metric!" : null}
      </div>
    )
  }

  //render screen
  return (
    <div className="TableScreen">
      <Menu/>
      {body && <Table body={body}/>}
    </div>
  );
}

//function that create simple array from json api input, (json data)
function CreateArray(data) {
  let array = []

  data.map((prop) => {
    const team = prop.team;

    prop.players.map((prop) => {
      let player = {};

      player = prop.stats;
      player.toi = parseTime(prop.stats.toi)
      player.Player = prop.player;
      player.Team = team;

      //return player to array
      array.push(player);
    })

  })
  
  return array; //returns all data in simple array
} 

//function parse time to mm:ss, (time)
function parseTime(time) {
  let secs = time % 60;
  let mins = (time - secs) / 60;

  return mins + ":" + secs;
}


export default TableScreen;
