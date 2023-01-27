import React from 'react';
import './TypeTwo.scss';

const index = ({ article }) => {
  return (
    <div className='type-two-article'>
       <img className="type-two-image"
          src={article?.image}
          alt={article?.title}
        />
        <p className='type-two-company'>{article?.company}</p>
        <h2 className='type-two-title'>{article?.title}</h2>
    </div>
  )
}

export default index