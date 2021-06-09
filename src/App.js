import './App.css';
import './toggle.css';
import React, { useState,useEffect } from 'react';

const App = () => {
  const [ThemeMode, SetThemeMode] = useState({color:"black",backgroundColor:"#ffffff"});
  
  var localArray_S = localStorage.getItem("key");
  let localArray_A = [];
  var mode = localStorage.getItem("mode");
  const [Theme, setTheme] = useState(false);
  
  if (localArray_S !== null && localArray_S !== "")
  localArray_A = localArray_S.split(',');
  useEffect(() => {
  if (mode=== "true"){
    setTheme(true);
  }
  else{
    setTheme(false);
  }
},[mode])

    useEffect(() => {
      if (Theme===true){
        SetThemeMode({color:"white",backgroundColor:"#111010"});
      }
      else{
        SetThemeMode({color:"black",backgroundColor:"#ffffff"});
      }
    }
    , [Theme])

    const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState(localArray_A);
  // const [ThemeMode, SetThemeMode] = useState({color:"white",backgroundColor:"#111010"});
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems(previous_array => {
      if (inputList !== "" && previous_array.indexOf(inputList) === -1) {
        var z = [...previous_array, inputList]
        var localArray_to_S = z.toString();
        localStorage.setItem("key", localArray_to_S);
        return z
      }
      else {
        if (previous_array.length > 0) {
          var localArray_to_S = [...previous_array].toString();
          localStorage.setItem("key", localArray_to_S);
        }
        return [...previous_array]
      }
    })
  }

  const deleteItem = (i) => {
    setItems((previous_array) => {
      const newArr = previous_array.filter((arrElem, index) => {
        return index !== i;
      })
      var localArray_to_S = newArr.toString();
      localStorage.setItem("key", localArray_to_S);
      return newArr
    })
  }

  return (
    <>
      <div className="main_div">
        <div style={{backgroundColor: ThemeMode.backgroundColor}} className="center_div">

          <label className="switch">
            <input checked={Theme} onChange={()=>{setTheme(!Theme); localStorage.setItem("mode",!Theme)}} type="checkbox"/>
              <span className="slider round"></span>
          </label>

            <h1 style={{color: ThemeMode.color}}>ToDo List</h1>
            <br />
            <div id="inp">
              <input type="text" placeholder="add an items" onChange={itemEvent} />
              <button onClick={listOfItems}>+</button>
            </div>
            <ol>
              {Items.map((a, i) => {
                var z = <div className="todo_style" key={i}>
                  <i className="cross" aria-hidden="true" onClick={() => {
                    deleteItem(i)
                  }}>X</i>
                  <li style={{ listStyle: "none" }}>{a}</li>

                </div>
                return z;
              })}
            </ol>
        </div>
        </div>
    </>
  );

}

export default App;