import './App.css';
import TableScreen from "./screens/TableScreen.jsx"


//root point of aplication
//place for router atd.
function App() {

  //returns Difrend screens
  return (
    <div className="App">
      <section>
        <TableScreen/>
      </section>
    </div>
  );
}


export default App;
