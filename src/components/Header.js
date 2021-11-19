import React from 'react';
import logo from '../logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light header">
                <a className="navbar-brand" href="/#"><img src={logo} style={{ height: "50px" }} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-right">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><h1 className="headerTitle">Countries App</h1></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}