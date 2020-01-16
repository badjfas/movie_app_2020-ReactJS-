import React from 'react'; //Component를 사용시 항상 선언


const foods = [{
  name : "김치",
  image : "https://post-phinf.pstatic.net/MjAxNzA4MTZfNDIg/MDAxNTAyODQyNDg0MzE0.67vxDK4BwFMtJkfEuNZQnaqqh0LQH9--P0KQxsQi7fcg.Jhml3483o9iDgK-v6ZQRDfUFjRc2ErkhZVXYKvN5SGEg.JPEG/GettyImages-a10328421.jpg?type=w1200"
},{
  name: "비빔밥",
  image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800"
},{
  name: "갈비",
  image:"http://m.handokmall.kr/web/product/big/201901/b76a02afec251e63c5f3013f3bd461b5.jpg"
}];

function Potato({name , picture}){
  return (<div>
    <h1>I like {name}</h1>
    <img src={picture}/>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      {foods.map(foods=>(
        <Potato name={foods.name} picture={foods.image}/>
      ))}
    </div>
  );
}

export default App;
