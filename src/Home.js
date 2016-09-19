import React, { PropTypes } from 'react'
import { Router, Route, browserHistory,IndexRoute } from 'react-router';

class Home extends React.Component {
    btnca(){
        browserHistory.push('a')
    }
    btncb(){
        browserHistory.push('m')
    }
    render () {
        return(
            <div>
                <div className="jumbotron" style={{textAlign:'center'}}>
                    <h1>你好</h1>
                    <p>do you live my home?</p>
                    <p><a className="btn btn-primary btn-lg" role="button" onClick={this.btnca.bind(this)}>go to about</a></p>
                    <p><a className="btn btn-primary btn-lg" role="button" onClick={this.btncb.bind(this)}>go to main</a></p>
                </div>
            </div>
        )
    }
}

export default Home;
