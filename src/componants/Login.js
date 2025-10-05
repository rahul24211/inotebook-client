import { Button, Transition } from '@mantine/core'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoteContext from '../pages/notes/noteContext'
import LogContext from '../pages/notes/logContext'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(NoteContext)
    const { showAlert } = context


    const logContext = useContext(LogContext)
    const { log } = logContext



    const [opened, setOpened] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setOpened(true)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await log(email, password)

        if (res.success) {
            showAlert(res.message, 'success')
            navigate('/')
        } else {
            showAlert(res.message, 'danger')
            setEmail('')
            setPassword('')

            navigate('/login')

        }



    }
    return (

        <Transition
            mounted={opened}
            transition="fade-left"
            duration={400}
            timingFunction="ease"
        >

            {(styles) => <div style={styles}> <div className='container my-5'>
                <div className='row justify-content-between'>
                    <div className='col-md-6' id='login'>
                        <form className='' onSubmit={handleSubmit}>
                            <h1 className='text-center'>Login Form</h1>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='input form-control my-3 p-2' type='email' placeholder='Email' />
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='input form-control my-3 p-2' type='password' placeholder='Password' />
                            <Button type='submit' fullWidth
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 90 }}
                                className='logButton'
                            >
                                Sign-IN
                            </Button>
                            <Link className='text-decoration-none' to="/register"><Button type='submit' fullWidth
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'green', deg: 90 }}
                                mt={4}
                                className='logButton'
                            >
                                Sign-Up
                            </Button> </Link>
                        </form>
                    </div>
                    <div className='col-md-6 my-5' >
                        <div className='my-5'>
                            <h1 id='logHeading1'>welcome back!</h1>
                            <p id='logHeading2'>you can sign in to access with your exisiting account.</p>
                        </div>
                    </div>
                </div>


            </div></div>}
        </Transition>







    )
}

export default Login
