import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

function Projectid() {

  const { id } = useParams;
  console.log(id);
  return (
    <>
    <Header />
    <div>
      Projectid - {id}
    </div>
    
    </>
    
  )
}

export default Projectid