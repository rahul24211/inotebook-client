import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-auto"
            style={{
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#222',
                color: 'white',
                padding: '10px 0',
                textAlign: 'center',
                


            }}>
            <div className="container text-center">
                <p className="mb-2">© 2025 Your Company. All rights reserved.</p>
                <div>
                    <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" aria-label="Facebook">
                        <FaFacebookF size={24} />
                    </Link>
                    <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" aria-label="Twitter">
                        <FaTwitter size={24} />
                    </Link>
                    <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3" aria-label="Instagram">
                        <FaInstagram size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
