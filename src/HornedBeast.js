import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './HornedBeast.css';


class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      likes:0,
    };
  };

  handleLikes=()=>{
    this.setState({
      likes:this.state.likes +1
    })
  };

  render(){
    return (        
      <article>
        <h2>{this.props.title}</h2>
        <div>
          <p>❤️</p>
          <p> Likes: {this.state.likes}</p>
        </div>
      <Image src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleLikes} fluid rounded/> 
      <p>{this.props.desc}</p>
      </article>
    );
  };
}

export default HornedBeast;