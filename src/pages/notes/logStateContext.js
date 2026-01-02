
import { useState } from 'react'
import LogContext from './logContext'

const LogStateContext = (props) => {
    const [user, setUser] = useState('')
    const [info, setinfo] = useState({})

    const log = async (email, password) => {
        const formData = { email, password }
        const responce = await fetch(`${process.env.REACT_APP_API_PORT}/api/auth/login`, {
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

    const getUser = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_PORT}/api/auth/getuser`, {
                method: 'POST',
                headers: {
                   
                    "auth-token": localStorage.getItem('token')
                }
            });

            if (!response.ok) throw new Error("Failed to fetch user");

            const data = await response.json();
            // backend { user: {...} } return kar raha hai
            setinfo(data.user); // direct user object store karo
            console.log("User info:", data.user);

        } catch (error) {
            console.error("getUser error:", error.message);
        }
    }


    return (
        <div>
            <LogContext.Provider value={{ log, user, getUser, info }}>
                {props.children}
            </LogContext.Provider>
        </div>
    )

}

export default LogStateContext
