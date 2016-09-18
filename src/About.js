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

}
 handleInput(e){
   let value = e.target.value;
   this.setState({inputValue:value})
 }
 handleClick(){
   let name = this.state.inputValue;
   seachGit(name)
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
    let styles= {
      btn:{
          width:'100px',
          height:'30px',
          backgroundColor:'purple',
          fontSize:'18px',
          textAlign:'center',
          lineHeight:'30px'
      }
    }
  return(
        <div>
          <input type="text" placeholder="uersname" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <button style={styles.btn} onClick={this.handleClick.bind(this)}>搜索</button><br />
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
