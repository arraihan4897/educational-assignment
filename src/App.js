import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';
import Course from './Components/Course/Course';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Topics/Topics';
import QuizCart from './Components/QuizCart/QuizCart';
import Error from './Components/ErrorPage/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
              {
                path:'/',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Topics></Topics>
               },{
                path:'/statistics',
                element:<Statistics></Statistics>
               },
               {
                path:'/blog',         
                element:<Blog></Blog>
               },
               {         
                 path: "/quiz/:id",
               loader: ({ params }) =>
                 fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),       
                element: <QuizCart></QuizCart>
             }
              
              ]
              },
              { path: "*", element: <Error></Error> },

  ])
  return (
    <div className="">
          
    <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
