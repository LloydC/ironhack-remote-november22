import React from 'react';
import ArticleTypeOne from '../../Article/types/Type1/TypeOne';
import './TypeOne.scss';

const TypeOne = ({ list }) => {
    const articles = list?.data?.en;

  return (
    <div className='articles-container'>
        <div className='articles-list'>
            {articles.map((article, i) => {
                if(article?.articleType === 'Type1'){
                    return <ArticleTypeOne key={i} article={article}  />
                }
                return null;
            })}
        </div>

    </div>
  )
}

export default TypeOne