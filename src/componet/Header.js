import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>
            <header className='container'>
                <div className='p-3'>
                    {/* <h1>ℙ𝔸ℝ𝕋ℍ</h1> */}
                    <img src="logo.png" alt="" />
                </div>
            </header>
        </>
    )
}

export default Header
