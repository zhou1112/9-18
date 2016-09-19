import React, { PropTypes } from 'react'
import Card from './component/card'
import { carddata } from './utils/helpers.js'

class About extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
            wait:true
        }
    }
    componentDidMount() {
        carddata()
        .then((we)=>
               this.setState({
                  data:we.as
               })
           )
    }
    render () {
        let Carddata=this.state.data.map((item,k)=><Card {...item} key={k} />)
        return(
            <div className="row">
            {Carddata}
            </div>
        )
    }
}

export default About;
