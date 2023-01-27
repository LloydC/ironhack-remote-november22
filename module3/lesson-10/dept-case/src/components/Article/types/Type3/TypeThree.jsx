import React from 'react';
import {ReactComponent as CaseIcon } from '../../../../assets/icons/polygon-case-icon.svg';
import './TypeThree.scss';

const TypeThree = ({ article }) => {
  return (
  <div className='type-three-article'>
    <p className='type-three-company'>{article?.company}</p>
    <h2 className='type-three-title'>{article?.title}</h2>
    <div className='article-link'>
          <CaseIcon style={{ marginRight: '1.2rem' }}/>
          <a rel="noreferrer" href={article?.url} target='_blank'>View case</a>
          </div>
  </div>
  )
}

export default TypeThree