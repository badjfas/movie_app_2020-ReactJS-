import React from 'react'; //Component를 사용시 항상 선언
import {BrowserRouter ,Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation";

function App(props){
  return <BrowserRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}> 
    </Route>
    <Route path="/detail" component={Detail} >
    </Route>
    <Route path="/about" component={About}>  
        </Route>
  </BrowserRouter>
}

export default App;