import React, { PropTypes } from 'react'
import { gitmd } from './utils/helpers.js'
import marked from 'marked'
import hljs from 'highlight.js'

class Blog extends React.Component {
    constructor(){
        super();
        this.state={
            data:'',
            wait:true
        }
    }
    returns(){
        return(marked(this.state.data))
    }
    componentDidMount() {
        let xss=this.props.params.title
            gitmd(xss)
            .then((we)=>
                   this.setState({
                      data:we.as
                  })
             )
             .catch(()=>{
                 alert('404')
             })

    }
    render () {
        marked.setOptions({
            highlight:function(code){
                return hljs.highlightAuto(code).value;
            }
        });
        return(
            <div>
                <div dangerouslySetInnerHTML={{__html: this.returns()}} className="post-content" />
            </div>
        )
    }
}

export default Blog;
