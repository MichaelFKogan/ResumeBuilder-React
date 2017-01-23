import React from 'react'
import NavLink from '../../utils/NavLink'

import App from '../App'
import Home from './Home'
import Search from './Search'
import PostAJob from './PostAJob'

import CreateAnAccount from './CreateAnAccount'

export default React.createClass({
  render() {
    
    {var x = 1;}
    
    return (

<div> {/* OPENING DIV */}

<div className="container-fluid center-block text-center" id="containerForResults">

    <div className="row ">
    
            <div className="text-left" id="searchResultsBoxResults">


            {this.props.jobresults.map(function(search, i) {
    return (

    <div key={i}>

        {/*x++*/}

        <div className="row">
            <span className="companyLocation">{search.location}</span>
            <p className="jobTitle"><strong><a href={search.detailUrl}>{search.jobTitle}</a></strong></p>
        </div>
        <div className="row">    
            <p className="date">{search.date.split("", 12)}</p>
            <p className="companyName"><strong>{search.company}</strong></p>
        </div>
        <div className="row">
          {/*  <button onClick="" className=" btn btn-default btn-xs saveButton">Save</button> */}
          {/*  <p className="snippet">{search.snippet}</p>   */}
        </div>
            <hr className="hrResults"/>

    </div>

)})}
        {/* END ROW */}   
    {/* END KEY */}    

        </div> {/* END SEARCHRESULTSBOXRESULTS */}
    
    </div> {/* END ROW */}



</div> {/* END CONTAINER */}


{/* CLOSING DIV */}
</div> 
    )
  }
})
