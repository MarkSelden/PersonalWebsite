import Headshot from './headshot.js'
import React, { Component } from 'react'

const Section1 = () => {
	const firstName = 'Mark';
	const lastName = 'Selden';
	const city = 'Los Angeles';
	const country = 'California';
    	return (
    		<div className="section1">
            	<Headshot />
            		<h2> {firstName} {lastName} </h2>
            		<p>{city}, {country}.</p>
			</div>

    	)
  }





export default Section1;