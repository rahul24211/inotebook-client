import React, { useContext, useEffect, useState } from 'react'
import { Form, Link, useLocation, useNavigate } from 'react-router-dom'
import ToggleContext from '../pages/notes/toggleContext'
import LogContext from '../pages/notes/logContext'
import { motion, AnimatePresence } from "framer-motion";
import NoteContext from '../pages/notes/noteContext';


const Navbar = () => {


    const [openProfile, setOpenProfile] = useState(false);

    const { notes, getAllNotes } = useContext(NoteContext);
    const { getUser, info } = useContext(LogContext)

   
    

    useEffect(() => {
        getAllNotes(); // page load par notes fetch karo
        getUser()
    }, []);

  ;
    // console.log("totes", getAllNotes)
    const toggleMode = useContext(ToggleContext)
    const { theme, setTheme } = toggleMode
    const navigate = useNavigate()

    const user = localStorage.getItem("name")
    console.log(user);


    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        navigate("/login")
    }

    const handleToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const location = useLocation()
    useEffect(() => {
    }, [location])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark position-fixed" id='nav'
            >
                <div className="container-fluid">
                    <Link id='logo' className="navbar-brand" to="#">Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">about</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/calculater' ? 'active' : ''}`} to="/calculater">Calculater</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/todolist' ? 'active' : ''}`} to="/todolist">Todo-List</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/counter' ? 'active' : ''}`} to="/counter">Counter</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/debouncingSesrch' ? 'active' : ''}`} to="/debouncingSesrch">debouncing-Sesrch</Link>
                            </li> */}
                        </ul>
                        {!localStorage.getItem("token") ? (
                            <div>

                                <Link to='/login'><button className='navBtn btn btn-primary'>Sign-IN</button></Link>
                                <Link to='/register'><button className='navBtn btn btn-success ms-2'>Sign-Up</button></Link>
                                <button onClick={handleToggle} className={`navBtn btn btn-${theme === 'dark' ? 'info' : 'secondary'} ms-2`} >{theme === 'light' ? 'Dark' : 'Light'}</button>
                            </div>
                        ) : <div className='d-flex gap-2'>
                            {/* <span id='user' className='text-capitalize'>{user}</span> */}
                            <button
                                id="user"
                                className="btn btn-primary text-capitalize"
                                onClick={() => setOpenProfile(true)}
                            >
                                {user.charAt(0)}
                            </button>



                        </div>
                        }
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {openProfile && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`position-fixed end-0 shadow p-3 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
                            }`}
                        style={{
                            width: "280px",
                            top: "56px",
                            height: "calc(100% - 56px)",
                            zIndex: 300,
                        }}
                    >
                        <button
                            className="btn btn-sm btn-danger mb-3"
                            onClick={() => setOpenProfile(false)}
                        >
                            Close
                        </button>

                        <h4 className="text-capitalize">{user}</h4>
                        <b>{info.email}</b>
                        <p className='text-capitalize'><b>total notes : </b> {notes.length}</p>

                        <hr />

                        {/* 🔥 THEME TOGGLE INSIDE PROFILE */}
                        <button
                            onClick={handleToggle}
                            className={`btn w-100 mb-2 btn-${theme === "light" ? "dark" : "info"
                                }`}
                        >
                            Switch to {theme === "light" ? "Dark" : "Light"} Mode
                        </button>

                        <button className="btn btn-outline-primary w-100 mb-2">
                            My Profile
                        </button>

                        <button
                            className="btn btn-outline-danger w-100"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>


    )
}

export default Navbar
