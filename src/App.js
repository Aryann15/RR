import {useState} from "react"

const user = {
  name: "heddy lamar",
  imageUrl: "'https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
}; 

const products = [{ title: 'Cabbage',isFruit: false, id: 1 },
{ title: 'Garlic',isFruit: false, id: 2 },
{ title: 'Apple',isFruit: true, id: 3 },
];

//use the map() function to transform an array of products into an array of <li> items

function App() {

  const [count,setCount]= useState(0)

  function increment(){
    setCount ( count +1)
  }
  function decrement(){
    setCount(count -1)
  } 
  const listItems = products.map( products =>
    <li key={products.id}
    style={{ 
      color: products.isFruit ? "red" : "darkgreen"  }}
    >
      
      {products.title}
    </li>)
    
    //events

    function handleClick(){
      alert('You Clicked Me!');

    }
  return (
    <div className="App">
      <h1> {user.name}</h1>
      <img
        classname="profilePic"
        src={user.imageUrl}
        alt="heddy lamar image"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}      />

      //rendering list
        <ul>{listItems}</ul>  
//responding events
        
        <button onClick={handleClick}> click me</button>
         </div>
  );
}

export default App;
