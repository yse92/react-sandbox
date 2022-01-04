import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    // используем useState и передаем в качестве начального значения initialFormState
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.currentTarget
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (...event) => {
        event.preventDefault()
        if (!user.name || !user.username) return
        props.addUser(user)//вызываем addUser и обнуляем форму
        setUser(initialFormState)
      }
    return (
        <form className="form-group" onSubmit = {handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
            <button className="btn btn-success">Add new user</button>
        </form>
    )
}
export default AddUserForm