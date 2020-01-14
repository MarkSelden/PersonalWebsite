import React, { Component } from 'react'
import Projects from './projects'




const Section2 = ({about="no info about author", projects={}, skills="useless", contact="unreachable"}) => {
   const aboutMe = "I am currently a Sophmore studying Computer Science at U.C. berkeley. I still don't know what I want to specialize in so I'm attempting to try everything! In my free time I love reading books, taking photos, listening to music, and watching movies."
   const examps = [
      {name:"Equity", description:"A chrome extension which provides a score detailing the ethics of the company listing an amazon item.", link:"https://github.com/MarkSelden/equity"},
      {name:"SmartPrice", description:"A webapp which returns statistical analysis on recent ebay trends to help a seller price their items well.", link:"https://github.com/kling111/SmartPrice"},
      {name:"7sfg Mobile", description:"A mobile app designed to help aid the 7th Special Forces Group(Airborne) with their day-to-day duties.(In progress)", link:"https://github.com/ajrivera721/7SFG-Mobile"}
      ];

   return (
      <div className="section2">
         <h2>About Me</h2>
         <p>{aboutMe}</p>
         <h2>Skills</h2>

         <p> Excellent:
                Python, Java, React, Javascript, Leadership, Communication.</p>
         <p>
             Good:
                C, React Native, Ruby, SQL, Scheme, Risc-V. </p>
         <Projects examples={examps} />
         <h2>Contact</h2>
         <p>seldenm@berkeley.edu</p>
      </div>
      )
}

export default Section2;