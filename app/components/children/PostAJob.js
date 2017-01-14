import React from 'react'
import NavLink from '../../utils/NavLink'

import App from '../App'
import Home from './Home'
import Search from './Search'

import SignIn from './SignIn'
import CreateAnAccount from './CreateAnAccount'

export default React.createClass({
  render() {
    return (

<div>

{/* NAVBAR =================================================*/}

<nav className="navbar navbar navbar-fixed-top" id="navbar">
    <div className="container-fluid">
            
        <div className="navbar-header">     
            <NavLink to="/" className="navbar-brand" id="brand">Resume Builder</NavLink>
        </div> 
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">

                    <li><NavLink to="/" className="navLinks">HOME</NavLink></li>

                    <li><NavLink to="/Search" className="navLinks" >SEARCH</NavLink></li>

                    <li><NavLink to="/PostAJob" className="navLinks" >POST A JOB</NavLink></li>

                    <li><NavLink to="/SignIn" className="navLinks" >SIGN IN</NavLink></li>

                    <li><NavLink to="/CreateAnAccount" className="navLinks" >CREATE AN ACCOUNT</NavLink></li>

                </ul>
            </div>

    </div> 
</nav>

{/* NAVBAR =================================================*/}


<div className="container-fluid center-block text-center">
    <div className="row">
    
            <div id="searchResultsBoxTwo"></div>

    </div> 
</div> 




</div>
    )
  }
})
