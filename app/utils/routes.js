import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App'
import Home from '../components/children/Home'
import Search from '../components/children/Search'

import PostAJob from '../components/children/PostAJob'
import SignIn from '../components/children/SignIn'
import CreateAnAccount from '../components/children/CreateAnAccount'

import Results from '../components/children/Results'

module.exports = (

<Route>
 <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/Results" component={Results}/> 

</Route>
    	<Route path="/Search" component={Search} /> 
    	<Route path="/PostAJob" component={PostAJob}/>  
    	<Route path="/SignIn" component={SignIn} />   
    	<Route path="/CreateAnAccount" component={CreateAnAccount}/>  
</Route>

)
