import "./Table.css"
import { useState } from "react";
import Header from "./Header";


//this component renders one table 
const Table = (data) => {

  //select all keys in table
  const keys = Object.keys(data?.[0].data)

  //map each row in an array
  //store each row component in the array temptable
  const tempTable = data.map((props,key) => {
    return (
      <div key={key}>
        <Row props={props} keys={keys}/>
      </div>
    )
  })

  //render whole table 
  return(
    <div className="Table">
      <Header keys={keys}/>
      {tempTable}
    </div>
  )
}


//this component renders one row
const Row = ({props,keys}) => {

  //state variables for row
  const [visible,setVisible] = useState(false);
  const [active,setActive] = useState(true);

  //select all data from specific data layer
  const data = props.data;

  //select children from specific data layer
  const children = props.children?.[Object.keys(props.children)[0]]?.records; 

  //map each key in array
  //store each value corresponding to theyr key
  const row = keys?.map((key) => {
    return(
        <p className="Table__p" key={key}> 
          {data?.[key]}
        </p>
      )
  })

  //component is active by default 
  //check if component is active means no one deleted it
  if(active)
  // returns row data, and its children in table
  return (
    <div>

      <div onClick={() => setVisible((visible) => !visible)} className="Table__data">
        {row}
        <p onClick={() => setActive(false)} className="Table__p">x</p>
      </div>
      
      <div style={visible ? {display:"block"} : {display:"none"}} className="Table__children">
        {children && Table(children)}
      </div>
      
    </div>
  )
  return(null)
}


export default Table;