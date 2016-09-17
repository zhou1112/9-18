import React, { PropTypes } from 'react';
import axios from 'axios';
import { seachGit } from '../uitll/helper';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    seachGit()
    .then( (data) => {
     console.log(data);
     this.setState({
      data:data.data,
      wait:false
    })
    console.log(this.state.data);
  });
}
  render () {
    let gitInfo = (
        <div>
         <h3>{this.state.data.name}</h3>
         <img src={this.state.data.avatar_url} />
        </div>
                )
  return(
        <div>
         {
            this.state.wait ? '正在获取数据' :
            <img src={this.state.data.avatar_url} />
         }
         { this.state.wait ? '请稍等' : gitInfo }
        </div>
    )
  }
}

export default About;
