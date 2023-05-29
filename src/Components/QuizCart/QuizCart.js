import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicQuiz from '../Topic-Quiz/TopicQuiz';

const QuizCart = () => {
    const topics = useLoaderData();
    console.log(topics);
   
    return (
        
            
    <div className=" mt-28 ml-24  lg:ml-56 topic ">
      <h1 className="text-3xl ml-20 lg:ml-52 text-lime-500 font-bold">
        Quiz of :{topics.data.name}
      </h1>
      {topics.data.questions.map((topic) => (
        <TopicQuiz topic={topic} key={topic.id}></TopicQuiz>
      ))}
         
            
        </div>
    );
};

export default QuizCart;