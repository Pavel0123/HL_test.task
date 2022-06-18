import "./Row.css";

//Row component, (data of the row)
const Row = ({data}) => {
  let keys = Object.keys(data);
  keys.reverse()

  const row = keys?.map((key) => {
    return(
        <p className="Row__p" key={key}> 
          {data?.[key]}
        </p>
      )
  })
  
  return (
    <div className="Row__data">
      {row}
    </div>
  )
}

export default Row;