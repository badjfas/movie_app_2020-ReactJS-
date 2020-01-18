import React from 'react'; //Component를 사용시 항상 선언

class App extends React.Component{
  state = {
    count:0
  }
  add = () => {
    console.log("add");
    this.setState.count++;
    console.log(this.state.count);
  };
  minus = () =>[
    console.log("minus")
  ];
  render()
  {
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>+</button>
      <button onClick={this.minus}> -</button>

    </div>
      )}
}

export default App;
