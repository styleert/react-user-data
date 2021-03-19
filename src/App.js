import React, {useState} from "react";
import './App.css';
import {userData} from "./userData";
import Card from "./components/Card/Card";
import {Header} from "./components/Header/Header";

function App() {
    const [userListData, setUserListData] = useState(userData);

    function onHeaderFieldChange(e) {
        let inputData = e.target.value;
        let filteredData = userListData.filter((item) => {
            // search in item.name for inputData
            return item.name.split(inputData).length > 1;
        });

        if(filteredData.length >= 1 && inputData.length !== 0) {
            setUserListData(filteredData);
        } else {
            setUserListData(userData);
        }
    }

    return (
        <React.Fragment>
            <Header onHeaderFieldChange={onHeaderFieldChange}/>
            <main>
                {userListData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            name={item.name}
                            age={item.age}
                            gender={item.gender}
                            balance={item.balance}
                            src={item.picture}
                        />
                    )
                })}
            </main>
        </React.Fragment>
    );
}

export default App;
