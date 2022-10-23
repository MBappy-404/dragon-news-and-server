import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Category from '../Pages/Category/Category';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import News from '../Pages/News/News';
import TermsCondition from '../Pages/Other/TermsCondition';
import Profile from '../Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute';



export const routes = createBrowserRouter([


     {
          path: '/',
          element: <Main></Main>,
          children: [

               {
                    path: '/',
                    element: <Home></Home>,
                    loader: () => fetch('https://dragon-news-server-black-nine.vercel.app/news')
                        
               },
               {
                    path: '/home',
                    element: <Home></Home>,
                    loader: () => fetch('https://dragon-news-server-black-nine.vercel.app/news')
                        
               },
               {
                    path: '/category/:id',
                    element: <Category></Category>,
                    loader: ({ params }) => fetch(`https://dragon-news-server-black-nine.vercel.app/category/${params.id}`)
               },
               {
                    path: '/news/:id',
                    element: <PrivateRoute> <News></News></PrivateRoute>,
                    loader: ({params}) => fetch(`https://dragon-news-server-black-nine.vercel.app/news/${params.id}`)
               },
               {
                    path: '/login',
                    element: <Login></Login>,
               },
               {
                    path:'/register',
                    element: <Register></Register>
               },
               {
                    path: '/terms',
                    element: <TermsCondition></TermsCondition>
               },
               {
                    path: '/profile',
                    element: <Profile></Profile>
               }
          ]
     }

]);