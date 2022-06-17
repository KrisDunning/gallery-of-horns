import React from 'react';
import data from './data.json';
import Main from './components/Main/Main.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import SelectedBeast from 'react-bootstrap/Modal'
import './App.css';


class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    showModal:false,
    beastobj:{},
    filterBy:'1',
  };
};

handleOnHide=()=>{
this.setState({
  showModal:false
});
}

handleOnShowModal=(beast)=>{
  this.setState({
    showModal:true,
    beastobj:beast,

  });
};

handleOnFilter=(filter)=>{
  console.log("handleonFilter: "+filter);
  this.setState({
    filterby:filter,
  })
};


  render() {
    return (
      <>
        <SelectedBeast
        show={this.state.showModal}
        onHide={this.handleOnHide}
        beastobj={this.state.beastobj}
        />
        <Header 
        handleOnFilter={this.handleOnFilter}
        />
        <Main
        openModal={this.handleOnShowModal} 
        data={data}
        filterBy={this.state.filterBy}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
