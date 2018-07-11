import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Home from './container/Home'
import Login from './container/Login'
import Users from './container/Users'
import NotMatch from './container/404'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" render={() => (
					<Home>
						<Route path="/home/users" component={Users} />
					</Home>
				)} />
				<Route path="*" component={NotMatch}/>
			</Switch>
		</Router>
	)
}

export default App
