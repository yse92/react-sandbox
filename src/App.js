import logo from './logo.svg';
import './App.css';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import { EditUserForm } from './components/EditUserForm';
function App() {
  const usersData = [
    { id: 1, name: 'Yaroslav', username: 'yse1992' },
    { id: 2, name: 'Ivan', username: 'ivanak47' },
  ]
  //setUsers как функция добавления setState(users...)
  const [users, setUsers] = useState(usersData)

  // флаг editing - изначально false, функция установки флага
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)//если готовы обновить
    //обновляем пользователя  по id
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  // значение "текущий пользователь на редактировании" + функция установки этого значения
  const [currentUser, setCurrentUser] = useState(initialFormState)
  //
  const editRow = user => {
    // готовы редактировать - флажок в true
    setEditing(true)
    // устанавливаем значения полей для формы редактирования
    // на основании выбранного "юзера"
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  return (
    <div className="App">
      <div className="container">
        <h3>CRUD App with Hooks</h3>
        <div>
          <div>
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          </div>
          <div>
            <h2>View users</h2>
            <UserTable editRow={editRow} users={users} deleteUser={deleteUser}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
