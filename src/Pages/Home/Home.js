import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../Shared/SummeryCard/NewsSummery';

const Home = () => {
     const allNews = useLoaderData();
     return (
          <div className='mt-3'>
               <h1>Dragon News Home : {allNews.length}</h1>
               {
                    allNews.map(news => <NewsSummery
                    key={news._id}
                    news={news}
                    
                    ></NewsSummery>)
               }
          </div>
     );
};

export default Home;