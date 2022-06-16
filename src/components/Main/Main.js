import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast.js';
import './Main.css';

class Main extends React.Component {



  render() {
    let beastArray = [];
    beastArray = this.props.data.map((beast, idx) => {
      return <HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        desc={beast.description}
        key={beast._id}
        openModal={this.props.openModal}
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
