import React, { PropTypes } from 'react'
import { uaxios } from './utils/helpers.js'

class About extends React.Component {
    constructor(){
        super();
        this.state={
            data:{},
            wait:true,
            val:'github name'
        }
    }
    valchange(e){
        let value=e.target.value;
        this.setState({
            val:value,
        })
    }
    // componentDidMount() {}
    btnclc(){
        let ass=this.state.val;
        uaxios(ass)
        .then((data)=>
           this.setState({
               data:data.data,
               wait:false
           })
       )
    }
    render () {
        let github=(
            <div style={{padding:'30px'}}>
                <h3 style={{float:'left'}}>my name is:</h3><h2 style={{float:'left'}}>{this.state.data.name}</h2><br /><h3>头像</h3>
                <img src={this.state.data.avatar_url} />
            </div>
        )
        return(
            <div style={{textAlign: 'center',}}>
                <input type="text" value={this.state.val} onChange={this.valchange.bind(this)} />
                <button onClick={this.btnclc.bind(this)}>搜索</button>
                {this.state.wait ? 'loading' : github }
            </div>

        )
    }
}

export default About;
