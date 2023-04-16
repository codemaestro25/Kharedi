import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
        <div className="container py-4 text-center">
            <div className="flex align-center justify-center text-white fw-4 fs-16">
                Made with <span className='mx-3 fa fa-heart'></span>
                <div className="vert-line"></div>
                <span className='title fw-6'> Kharedi</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer