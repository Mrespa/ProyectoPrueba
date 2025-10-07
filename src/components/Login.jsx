import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

function Login() {
    const { addNewUser } = useContext(GlobalContext)

    const userFake = {
        name: "ANAKNFNF", email: "ogba@gmail"
    }

    const handleClick = (e) => {
        e.preventDefault()
        addNewUser(userFake)
    }

    return (
        <div>
            <button onClick={handleClick}>Add User</button>
        </div>
    )
}

export default Login