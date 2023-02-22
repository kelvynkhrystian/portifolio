import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Projectid() {

  const { id } = useParams();
  
  console.log(id);
  return (
    <>
    <Header />
    <div>
      <h1>{id}</h1>
      <h2>Project id - {id}</h2>
    </div>
    
    </>
    
  )
}

export default Projectid