import React from 'react';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummery = ({ news }) => {

     const { _id, title, total_view, rating, author, details, image_url } = news;
     return (
          <div>
               <Card className="text-justify mb-3">
                    <Card.Header className='d-flex justify-content-between align-items-center'>
                         <div className='d-flex align-items-center'>
                              <Image
                                   roundedCircle
                                   className='me-2'
                                   src={author.img}
                                   style={{ height: '60px' }}
                              />

                              <div>
                                   <p className='mb-0'>{author.name}</p>
                                   <p>{author.published_date}</p>
                              </div>
                         </div>
                         <div>
                              <FaRegBookmark className='me-2'></FaRegBookmark>
                              <FaShareAlt></FaShareAlt>
                         </div>

                    </Card.Header>
                    <Card.Body>
                         <Card.Title>{title}</Card.Title>
                         <Card.Img variant='top' src={image_url} />
                         <Card.Text>
                              {
                                   details.length > 250 ?
                                        <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`} >Rad More</Link> </p> : <p>{details}</p>
                              }
                         </Card.Text>

                    </Card.Body>
                    <Card.Footer className="text-muted d-flex justify-content-between">
                         <div> <FaStar className='me-1 text-warning'></FaStar> <small>{rating.number}</small></div>
                         <div><FaEye></FaEye> <span> {total_view} </span> </div>
                    </Card.Footer>
               </Card>
          </div>
     );
};

export default NewsSummery;