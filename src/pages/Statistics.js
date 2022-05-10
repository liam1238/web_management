import React from 'react'
import Navbar from '../components/Navbar'
import Donut from '../components/charts/Donut'
import Bar from '../components/charts/Bar'

function Statistics() {
    return (
        <>
        <Navbar />
        <Donut/>
        <div className="section">
          <Bar />
        </div>
        </>
    )
}

export default Statistics;
