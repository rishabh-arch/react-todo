import './App.css';
import React, { useState } from 'react';

const App = () => {
  var localArray_S = localStorage.getItem("key");
  let localArray_A = [];
  if (localArray_S !== null && localArray_S !== "")
    localArray_A = localArray_S.split(',');

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState(localArray_A);

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
        <div className="center_div">
          <h1>ToDo List</h1>
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