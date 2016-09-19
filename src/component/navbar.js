import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component {
    render () {
        return(
<div>
    <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">NuanCheng</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link activeStyle={{backgroundColor:'#F0FFFF',color:'#EEC900'}} onlyActiveOnIndex={true} to="/">Home</Link>
                    </li>
                    <li>
                        <Link activeStyle={{backgroundColor:'#F0FFFF',color:'#EEC900'}} to="/a">about</Link>
                    </li>
                    <li>
                        <Link activeStyle={{backgroundColor:'#F0FFFF',color:'#EEC900'}} to="/m">main</Link>
                    </li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
        )
    }
}

export default Navbar;

// <ul className="nav nav-tabs" role="tablist">
//     <h1>你好</h1>
//     <li role="presentation">
//         <Link activeStyle={{backgroundColor:'yellow',color:'#fff'}} onlyActiveOnIndex={true} to="/">Home</Link>
//     </li>
//     <li role="presentation">
//         <Link activeStyle={{backgroundColor:'yellow',color:'#fff'}} to="/a">about</Link>
//     </li>
//     <li role="presentation">
//         <Link activeStyle={{backgroundColor:'yellow',color:'#fff'}} to="/m">main</Link>
//     </li>
// </ul>
