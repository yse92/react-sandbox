import logo from './logo.svg';
import './App.css';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'

function App() {
  const usersData = [
    { id: 1, name: 'Yaroslav', username: 'yse1992' },
    { id: 2, name: 'Ivan', username: 'ivanak47' },
  ]
  //setUsers как функция добавления setState(users...)
  const [users, setUsers] = useState(usersData)

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <div className="container">
        <h3>CRUD App with Hooks</h3>
        <div>
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          <div>
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
