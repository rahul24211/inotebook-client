
import { useState } from 'react'
import LogContext from './logContext'

const LogStateContext = (props) => {
    const [user, setUser] = useState('')
    const log = async (email, password) => {
        const formData = { email, password }
        const responce = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const res = await responce.json()
        console.log(res);
        console.log(res.apiData);


        if (res.success) {
            localStorage.setItem('token', res.authToken)
            localStorage.setItem('name', res.apiData)
            setUser(res.apiData)

            return { success: true, message: res.message }
        } else {
            return { success: false, message: res.message }
        }
    }

    return (
        <div>
            <LogContext.Provider value={{ log, user }}>
                {props.children}
            </LogContext.Provider>
        </div>
    )

}

export default LogStateContext
