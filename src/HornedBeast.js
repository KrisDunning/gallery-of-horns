import React from "react";

class HornedBeast extends React.Component{
  render(){
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.URL} alt={this.props.title}/> 
      <p>{this.props.desc}</p>
      </>
    );
  };
}

export default HornedBeast;