import React, { Component } from 'react'
import query from '../../common/Query'
import { connect } from 'react-redux'

class Users extends Component {
	state = {}

	componentWillMount(){
		console.log('===>', this.props)
	}

	render() {
		return (
			<div className="users">
				users
			</div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Users)