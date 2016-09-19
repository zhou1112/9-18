import React, { PropTypes } from 'react'
import marked from 'marked'

class Marked extends React.Component {
    returns(){
        return(marked('I am using __markdewwrewown__.'))
    }
    render () {
        return(
            <div>
                <h2>你好</h2>
                <div dangerouslySetInnerHTML={{__html: this.returns()}} />
            </div>
        )
    }
}

export default Marked;
