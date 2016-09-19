import React, { PropTypes } from 'react'
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

import App from './app'
import About from './about'
import Main from './main'
import Home from './home'
import Blog from './blog'

class Routers extends React.Component {
    render () {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/a" component={About} />
                    <Route path="/m" component={Main} />
                    <Route path="/blog/:title" component={Blog} />
                </Route>
            </Router>
        )
    }
}

export default Routers;
