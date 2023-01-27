import React from 'react';
import {ReactComponent as CaseIcon } from '../../../../assets/icons/polygon-case-icon.svg';
import './TypeOne.scss';

const TypeOne = ({article}) => {
  return (
    <div className='type-one-article'>
        <img className="article-image"
          src={article?.image}
          alt={article?.title}
        />
        <p className='company-name'>{article?.company}</p>
        <h2 className='article-title'>{article?.title}</h2>
        <div className='article-link'>
          <CaseIcon style={{marginRight: '1.2rem'}}/>
          <a rel="noreferrer" href={article?.url} target='_blank'>View case</a>
          </div>
    </div>
  )
}

export default TypeOne