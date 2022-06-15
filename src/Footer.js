import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  constructor(props){
    super(props);
    this.state={
      heart:''
    };
  };

  handleOnClick=()=>{
    this.setState({
      heart:'❤️❤️❤️❤️❤️❤️❤️❤️❤️'
    })
  };

  render() {
   return (
    <footer onClick={this.handleOnClick}>
      <p>{this.state.heart}Page brought to you by Kris Dunning{this.state.heart}</p>
    </footer>
   )
  };

}

export default Footer;