import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
                ToDo List Application
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                
            </button> 

            <Link className="btn btn-outline-light" to = "/adduser">
                Add ToDo
            </Link>   
         </div>
    </nav>
  </>
    
  )
}
