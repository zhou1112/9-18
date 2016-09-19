import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'


class Card extends React.Component {
    btncla(){
        let addsrc=this.props.srcurl;
        browserHistory.push(`/blog/${addsrc}`)
    }
    render () {
        return(
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={this.props.imgsrc} alt="..." />
                    <div className="caption">
                        <h3>{this.props.Hthree}</h3>
                        <p>{this.props.Ptitle}</p>
                        <p><a className="btn btn-primary" role="button" onClick={this.btncla.bind(this)}>Button</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

Card.defaultProps={
    imgsrc:'https://img.alicdn.com/imgextra/i4/411329340/TB2hozsopXXXXbjXXXXXXXXXXXX_!!411329340.jpg',
    Hthree:'Thumbnail label',
    Ptitle:'...',
}

export default Card;
