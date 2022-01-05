import React from 'react'

export const UserTable = (props) => {

    const handleDeleteUser = id =>{
        let answer = window.confirm("Вы уверены?")
        if (answer){
            props.deleteUser(id)
        }
    }

    return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                <button className="btn btn-info"                
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="btn btn-secondary">
                
                  Edit
                
                </button>
                <button className="btn btn-danger"
                onClick={()=>handleDeleteUser(user.id)}>Delete</button>
                </td>
            </tr>
            ))
        ) : (
            <tr>
            <td colSpan={3}>No users</td>
            </tr>
        )}
        </tbody>
  </table>
    )
}
export default UserTable