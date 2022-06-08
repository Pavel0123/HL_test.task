import "./Header.css"


//this component renders keys of table 
  const Header = ({keys}) => {

    //map each key in array
    //store each key component in the array elements
    const elements = keys?.map((data,key) => {
      return(
      <h3 className="Header__h3" key={key}>{data}</h3>
      )
    })

    //renders all keys from array
    return (
      <div className="Header">
        {elements}
        <h3 className="Header__h3" >delete</h3>
      </div>
    )
  }


  export default Header;