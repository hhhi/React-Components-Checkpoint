import React from "react";
import ReactDOM from "react-dom";
import App from".App"
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>,rootElement);
import Profilphoto from"./Profile/ProfilPho"
import adress from"./Profile/Address"
const App =()=>(
  <>
  <Profilphoto/>
  </>
)
export default App;


import fullfame from" ./Profile/FullName"
const App =()=>(
  <>
  <fullfame/>
  </>

);
export default App;


import adress from"./Profile/Address"
const App =()=>(
  <>
  <adress/>
  </>

);
export default App;
