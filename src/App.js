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
    toggleModal:false,
    beastTitle:'',
    image_url:'',
    desc:'',
  };
};

handleOnHide=()=>{
this.setState({
  showModal:false
});
}

handleOnShowModal=(name,image,descrip)=>{
  this.setState({
    showModal:true,
    beastTitle:name,
    image_url:image,
    desc:descrip,

  });
};

  render() {
    return (
      <>
        <Header/>
        <Main
        openModal={this.handleOnShowModal} 
        data={data}
        />
        <Footer/>
        <SelectedBeast
        show={this.state.showModal}
        onHide={this.handleOnHide}
        title={this.state.beastTitle}
        image_url={this.state.image_url}
        desc={this.state.desc}
        />
      </>
    );
  }
}

export default App;