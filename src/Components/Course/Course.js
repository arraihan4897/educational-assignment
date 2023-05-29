import React from 'react';
import './Course.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Course = ({quiz}) => {
    const {id, logo, name,}=quiz;
    return (
        <div className='border rounded m-5 p-1 m-2 cart'>
            <img src={logo} alt="" />
            <div className="div-con">
                <div> <h5>{name}</h5></div>
                <div className='bg-info border rounded'> 



      <Button variant="info" >
       
       <Link className='text-dark p-0 m-0' to={`/quiz/${id}`}>Start Practice</Link>
      </Button>
   


              </div>               
            </div>
            
            
        </div>
    );
};

export default Course;