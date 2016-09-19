import React, { PropTypes } from 'react'
import Navbar from './component/navbar'
import Footer from './component/footer'

class App extends React.Component {
    render () {
        return(
            <div>
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default App;
