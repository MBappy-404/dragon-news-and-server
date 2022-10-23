import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../Shared/SummeryCard/NewsSummery';

const Category = () => {
     const categoryNews = useLoaderData()
     return (
          <div className='mt-5'>
               <h3> This Category Item {categoryNews.length}</h3>
               {
                    categoryNews.map(news =>
                         <NewsSummery
                         key={news._id}
                         news={news}
                         ></NewsSummery>
                         )
               }
          </div>
     );
};

export default Category;