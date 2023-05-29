import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Topics.css'

const Topics = () => {
    const quizs = useLoaderData();

    return (
        <>
          <h1 className='bg-info p-5 text-center'><b>Let's take A challanges  and judge yourself</b></h1>
    

        <div className=' pt-2 topics-container'>
      
        {quizs.data.map(quiz =>
                    <Course
                    
                    className=''  
                    key={quiz.id}
                    quiz={quiz}
                    ></Course>
                )
            }
            
        </div>      </>
    );
};

export default Topics;