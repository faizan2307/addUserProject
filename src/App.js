import "./App.css";
import AddUser from "./Components/Users/AddUser";
import React, { useState, Fragment } from "react";
import UsersList from "./Components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      // console.log(prevUsersList)
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
