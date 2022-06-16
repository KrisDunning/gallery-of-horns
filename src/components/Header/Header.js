import React from 'react';
import './Header.css';

class Header extends React.Component {

  constructor(props){
    super(props);
    this.state={
      color: 'blue',
      align:'center',
      width: '100%',
      bgcolor: '',
    };
  };
  
  handleClick=()=>{
    this.setState({
      color:this.color='#00ff55',
      align: 'start',
      width:'0%',
      bgcolor:'orange',
    })
  };

  render() {
   return (
    <header style={{backgroundColor:this.state.bgcolor}}>
      <h1 style={{color: this.state.color, textAlign: this.state.align, width:this.state.width}} onClick={this.handleClick}> Horned Beasts ! Fact or Fiction!? </h1>
    </header>
   )
  };

}

export default Header;