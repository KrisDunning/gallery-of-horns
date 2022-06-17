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
      filterBy:'',
    };
  };
  
  // handleClick=()=>{
  //   this.setState({
  //     color:this.color='#00ff55',
  //     align: 'start',
  //     width:'0%',
  //     bgcolor:'orange',
  //   })
  // };

  handleSubmit=(event)=>{
    event.preventDefault();
    console.log("setting filter value: "+event.target.numHorns.value);
    this.setState({
      filterBy:event.target.numHorns.value,
    });
    this.props.handleOnFilter(this.state.filterBy);
  };

  render() {
    // let sendFilterUp=()=>this.props.handleOnFilter;
    // sendFilterUp(this.state.filterBy);
    return (
    <header style={{backgroundColor:this.state.bgcolor}}>
      <h1 
        style={{color: this.state.color, textAlign: this.state.align, width:this.state.width}} 
        //onClick={this.handleClick}
        >Horned Beasts ! Fact or Fiction!? 
      </h1>

      <form onSubmit={this.handleSubmit}>
        <label
         htmlFor="numHorns">Filter by # of Horns
        </label>    
          <fieldset>
          <legend>Filter By # of Horns</legend>
          <select name="numHorns">
            <option value="all"> All </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="100"> 100 </option>
          </select>         
          </fieldset>
      <button 
        variant="primary" 
        type="submit">
        Submit
      </button>
      </form>
    </header>
   )
  };

}

export default Header;