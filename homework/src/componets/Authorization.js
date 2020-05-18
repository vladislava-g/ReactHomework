import React from 'react';

class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: ""
        }
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    componentDidMount() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <span className="authorization" onClick={this.changeStatus}>{this.state.isLoggedIn ? "Log Out" : "Log In"}</span>
        )
    }
}

export default Authorization;