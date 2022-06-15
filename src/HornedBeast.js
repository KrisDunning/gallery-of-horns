import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
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
      // <article>
      //   <h2>{this.props.title}</h2>
      //   <div>
      //     <p>❤️</p>
      //     <p> Likes: {this.state.likes}</p>
      //   </div>
      // <Image src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleLikes} fluid rounded/> 
      // <p>{this.props.desc}</p>
      // </article>
    
      <Card bg="info" style={{ width: '18rem'}}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.desc}
        </Card.Text>
        <Button variant="secondary" onClick={this.handleLikes}>UpBoop the Snoot</Button>
        <p>❤️ {this.state.likes} UpBoop's </p>
      </Card.Body>
    </Card>
      );
  };
}

export default HornedBeast;