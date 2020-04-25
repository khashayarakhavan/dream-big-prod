import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import '../../res/css/style.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
            return ;
            case false:
                return (<li><a href="/auth/google">continue with Google</a></li>);
            default:
                return [<li key="1"><Payments /></li>, <li key="2">Credits: {this.props.auth.credits}</li>,<li key="3"><a href="/api/logout">Log out</a></li>];
        }
    }

    render() {
        // console.log(this.props.auth);
        // console.log(this.props);
        return(
            <div>
                <div className="navbar">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="navbar__brand">
                        AftoflBIG5
                    </Link>
                    
                    <ul className="right">
                  
                            {/* <a href="/auth/google">Login with Google</a> */}
                            {this.renderContent()}
                    
                    </ul>
                </div>
            </div>
        );
    }
}

// receiving all states from Redux store.
function mapStateToProps({ auth }) {
    /* ES17 version - when key and value are the same */ 
    return { auth };
    // vanilla version :: return { auth: auth };
}

export default connect(mapStateToProps)(Header);