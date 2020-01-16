import React from 'react'; //Component를 사용시 항상 선언
import Potato from './Potato'; //Potato라는 Component 사용

//react는  소스코드에 처음부터 
function App() {
  return (
    <div className="App">
      Hello
      <Potato />
    </div>
  );
}

export default App;
