import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  // state hook -'useState'
  const [newItem,setNewItem] = useState("");
  const [items, setItem] = useState(() =>{
    const storedItems = localStorage.getItem("ITEMS");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  

  //helper Functions
  function addItem(){
    if(!newItem){
      alert("Enter an item");
      return;
    }
    const item ={
      id:Math.floor(Math.random()*1000),
      value:newItem
    };
    //console.log(item);
    setItem(oldList => [...oldList,item]);
    setNewItem("");
    
  }
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  function deleteItem(id){
    const newArray = items.filter(item=>item.id!==id);
    setItem(newArray);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addItem();
    }
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      
      
      <input
      type="text"
      placeholder='Add an item..'
      value={newItem}
      onChange={e=>setNewItem(e.target.value)}
      onKeyDown={handleKeyDown}
      ></input>
      <button onClick={() => addItem()}>Add</button>
      <ul>
       {items.map(item=>{
        return(
          <li key={item.id}>{item.value}<button className='delete-button' onClick={()=>deleteItem(item.id)}>X</button></li>
        )
       })}
      </ul>
    </div>
  );
}

export default App;
//hello ajay (owner) has made the change to check
