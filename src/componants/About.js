import React from 'react'

const About = () => {

  const skills = ["html", "css", "bootstrap", "motion", "javascript", "react", "contextApi", "nodejs", "express.js", "mongodb"]

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-capitalize text-center my-5'>
            <h3>this website is inotebook</h3>
            <h5>add, delete, update, manage and secure your notes </h5>

          </div>
        </div>
      </div>
      <hr />

      <div className='conatainer'>
        <div className='row justify-content-center'>
          <h3 className='text-center text-capitalize my-5'>inotebook website using these skills :</h3>
          {skills.map((skill) => (
            <div id='skills' className='col-md-3 text-center text-capitalize my-3'>
              {skill}
            </div>
          ))}



        </div>

      </div>
    </>
  )
}

export default About
