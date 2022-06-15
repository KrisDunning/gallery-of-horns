import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArray=[];
    beastArray=data.map((beast,idx)=> {
    return <HornedBeast 
    title={beast.title}
    image_url={beast.image_url}
    desc={beast.description}
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
