import "./Table.css"
import { useState } from "react";
import Header from "./Header";
import Row from "./Row";

//Exported table component, (data of the table)
const Table = (body) => {
  const [table, setTable] = useState();
  const data = body.body;

  //select all keys in table
  let keys = Object.keys(data?.[0]);
  keys = keys?.reverse();
  
  //Click on header run this function, (clicked key)
  const sort = (key) => {
    const sortedData = sortBy(data,key)
    render(sortedData)

  }

  //Function that stores render to state, (data to render)
  function render(data) {
    const tempTable = data.map((props,key) => {
      return (
        <Row key={key} data={props} keys={keys}/>
      )
    })
    setTable(tempTable)
  };

  //render data when loaded
  useState(() => {
    return render(data);
  },[body])
  
  //render whole table 
  return(
    <div className="Table">
      <Header onClick={sort} keys={keys}/>
      {table}
    </div>
  )
}


//sorting function, (object of data, sorting key)
function sortBy(data,key) {
  data.sort(function(a, b) {
    const nameA = a?.[key] + ""; 
    const nameB = b?.[key] + ""; 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // if names are equal
    return 0;
  });
  return data;
}


export default Table;