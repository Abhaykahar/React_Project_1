import {data,employee}  from "./Data"
import Datarecord from "./Datarecord"
import Header from "./Header";
import Record from "./Record";

function App() {
  return (
    <div>
      <Header/>
      <Datarecord data={data}/>
      <Record employee={employee}/>
    </div>
  )
}

export default App;
