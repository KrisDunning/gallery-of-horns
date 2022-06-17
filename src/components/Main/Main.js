import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.js';
import './Main.css';

class Main extends React.Component {



  render() {
    let beastArray = [];
    beastArray = this.props.data.map((beast) => {
      return <HornedBeast
        openModal={this.props.openModal}
        beastobj={beast}
        key={beast._id}
      />
    });

    return (
      <>
        <main>
          {beastArray}
        </main>
      </>
    )
  };
}

export default Main;
