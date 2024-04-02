import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({search , setSearch , searchVal , setSearchVal , showTeam , setShowTeam}) => {


  

    const searching = () => {

        setSearch(searchVal)
    }
  return (
    <div className='navbar'>

    <div className="left">
    <Link to={'/'} style={{textDecoration: 'none' , color : 'white'}}>
      <h1>
        TEAMS
        </h1>
        </Link>
    </div>
    <div className='center'>

    </div>
    <div className="right">
        <div>

                <input type="text" onChange={(e) => setSearchVal(e.target.value)}/>
        <button onClick={() => searching()}>Search</button>

        </div>
        <Link to={'/teams'} style={{textDecoration: 'none' , color : 'white'}}>
        <button className='show'> Show Teams</button>
        </Link>
        </div>

     
    </div>
  )
}

export default Navbar
