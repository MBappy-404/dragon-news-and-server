import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LsideNav = () => {

     const [categories, setCategories] = useState([]);
     useEffect(()=>{
          fetch('https://dragon-news-server-black-nine.vercel.app/news-categories')
          .then(res => res.json())
          .then(data => setCategories(data))
     },[])
     return (
          <div className='mt-5'>
              <h4>All Category</h4>
              <div >
               {
                    categories.map(category => {
                         return <p key={category.id}>
                              <Button className='btn-sm' variant="outline-dark"> <Link className='btn text-primary btn-sm' to={`/category/${category.id}`}>{category.name}</Link></Button>
                         </p>;
                    })
               }
              </div>
          </div>
     );
};

export default LsideNav;