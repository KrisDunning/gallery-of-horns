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

  // getFilteredArray=()=>{
  //   let filter=this.props.filterBy;
  //   let filteredBeastArray='';
  //   if(filter!=='all'){ 
  //     filteredBeastArray=this.props.data.filter(beast =>filter===beast.horns);    
  //   }else{
  //     filteredBeastArray=this.props.data;
  //   }
  //   return filteredBeastArray;
  //   };

  render() {
    // filteredBeastArray={this.getFilteredArray}
    let filter=this.props.filterBy;
    let filteredBeastArray='';
    console.log("filter: "+filter);
    //console.log(`data ${this.props.data}`);
    if(filter==='all'){ 
      filteredBeastArray=this.state.beastArray;
      console.log("show all"+filteredBeastArray);
    }else{
      filteredBeastArray=this.state.beastArray.filter(beast =>parseInt(filter)===parseInt(beast.horns));    
      console.log("show filtered" +filteredBeastArray);
    }
    let showBeast=filteredBeastArray.map((beast) => {
      return <HornedBeast
        openModal={this.props.openModal}
        beastobj={beast}
        key={beast._id}
      />
    });
    console.log(filteredBeastArray);
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
