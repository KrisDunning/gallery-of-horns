import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.js';
import './Main.css';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      beastArray:this.props.data
    };
  };

  getFilteredArray=()=>{
    let filter=this.props.filterBy;
    let filteredBeastArray='';
    if(filter!=='all'){ 
      filteredBeastArray=this.props.data.filter(beast =>parseInt(filter)===parseInt(beast.horns));    
    }else{
      filteredBeastArray=this.props.data;
    }
    return filteredBeastArray;
    };

  render() {
    let filteredBeastArray=this.getFilteredArray();
    let showBeast=filteredBeastArray.map((beast) => {
      return <HornedBeast
        openModal={this.props.openModal}
        beastobj={beast}
        key={beast._id}
      />
    });
    return (
      <>
        <main>
          {showBeast}
        </main>
      </>
    )
  };
}

export default Main;
