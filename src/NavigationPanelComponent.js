import React from 'react';
import { Link } from 'react-router-dom';
class NavigationPanelComponent extends React.Component{
    render(){
        return(
         
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand">{this.props.logoText}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link to='/aboutUs' className="nav-link" >About Us <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                        <Link  to='/explore' className="nav-link" tabIndex="-1" aria-disabled="true">Explore</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
export default NavigationPanelComponent;