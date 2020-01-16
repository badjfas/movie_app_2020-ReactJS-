import React from 'react'; //Component를 사용시 항상 선언


const foods = [{
  id:1,
  name : "김치",
  image : "https://post-phinf.pstatic.net/MjAxNzA4MTZfNDIg/MDAxNTAyODQyNDg0MzE0.67vxDK4BwFMtJkfEuNZQnaqqh0LQH9--P0KQxsQi7fcg.Jhml3483o9iDgK-v6ZQRDfUFjRc2ErkhZVXYKvN5SGEg.JPEG/GettyImages-a10328421.jpg?type=w1200",
  rating: 5.3
},{
  id:2,
  name: "비빔밥",
  image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
  rating:4
},{
  id:3,
  name: "갈비",
  image:"http://m.handokmall.kr/web/product/big/201901/b76a02afec251e63c5f3013f3bd461b5.jpg",
  rating:7
}];

const lang=[{
  ids:1,
  name:"JavaScript",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
  ,rating:5
  },{ 
  ids:2,
  name:"C",
  image:"https://i.pinimg.com/originals/9e/22/f4/9e22f4f5fdcaa7486b07e84b355ef41d.png"
  ,rating:6
  },{ 
  ids:3,
  name:"Swift",
  image:"https://developer.apple.com/swift/images/swift-og.png"
  ,rating:3
  },{
  ids:4,
  name:"C++",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
  ,rating:3
  }];

function Food({name , picture}){
  return (<div>
    <h1>{name}</h1>
    <img src={picture} alt={name}/>
    </div>
  )
}

function Language({name,picture}){
  return (<div>
    <h1>{name}</h1>
    <img src={picture} alt={name}/>
    </div>
    
  )
}
function App() {
  return (
    <div>
      {foods.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
            {lang.map(category=>(
        <Language key={category.ids} name={category.name} picture={category.image}/>
      ))}
    </div> 
 );
}

export default App;
