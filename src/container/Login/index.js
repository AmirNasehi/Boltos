import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        const { email, password } = this.state;

        console.log(this.props)

        return (
            <div className="login">
                <div className="background">
                    logiiiiiiiiiiiiiin
					<img src="/assets/img/profile.png" alt="" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Login)