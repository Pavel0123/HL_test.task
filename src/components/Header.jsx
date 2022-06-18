import "./Header.css"

//Header component, (keys from table, onClick function)
  const Header = ({keys,onClick}) => {

    const elements = keys?.map((props,key) => {
      return(
      <h3 onClick={() => onClick(props)} className="Header__h3" key={key}>{props}</h3>
      )
    })

    return (
      <div className="Header">
        {elements}
      </div>
    )
  }

  export default Header;