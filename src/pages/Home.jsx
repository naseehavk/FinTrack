import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
    return (
        <>
\            <div>
                <div className="welcome-container">
                    <div className='d-flex flex-column justify-content-center'>
                        <header className="hero-section mt-5">
                            <h1>Welcome to FinTrack</h1>
                            <p>Your Personal Expense Tracker</p>
                            <Link to={'/form'}>
                            <button className="cta-button">Get Started</button>
                            </Link>
                        </header>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home
