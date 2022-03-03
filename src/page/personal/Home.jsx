import React from 'react';
import Charts from '../../components/charts/Charts';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import Topbar from '../../components/topbar/Topbar';
import './home.css'
export default function Home() {
  return (
    <>

    <div className='Home'>
        <Featuredinfo />
        <Charts />
    </div>
    </>
  )
}
