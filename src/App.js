import React from 'react'; //Component를 사용시 항상 선언
import {BrowserRouter ,Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation"
function App(){
  return <BrowserRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}> 
    </Route>
    <Route path="/home/introduction" >
        <h1>introduction</h1>
    </Route>
    <Route path="/about">
      <h1>About</h1>
      </Route>
  </BrowserRouter>
}

export default App;