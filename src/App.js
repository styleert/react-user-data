import React from "react";
import './App.css';
import {userData} from "./userData";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      {userData.map((item, index) => {
        return(
            // <div key={index}>
            //   <ul>
            //     <li>
            //       <span>{item.name}</span>
            //     </li>
            //     <li>
            //       <span>{item.age}</span>
            //     </li>
            //     <li>
            //       <span>{item.gender}</span>
            //     </li>
            //     <li>
            //       <span>{item.balance}</span>
            //     </li>
            //   </ul>
            //   <img src={item.picture} alt=""/>
            // </div>

            <Card
                key={index}
                props={item}
                // name={item.name}
                // age={item.age}
                // gender={item.gender}
                // balance={item.balance}
                // src={item.picture}
            />
        )
      })}
    </div>
  );
}

export default App;
