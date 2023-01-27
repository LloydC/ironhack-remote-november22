import React from 'react';
import ArticleTypeTwo from '../../Article/types/Type2/TypeTwo';
import ArticleTypeThree from '../../Article/types/Type3/TypeThree';
import useIsMobile from '../../../utils/useIsMobile';
import './TypeTwo.scss';

const TypeTwo = ({ list, changeOrder }) => {
    const isMobile = useIsMobile();
    const flexDirection = isMobile ? 'column': 'row-reverse';
    const articles = list?.data?.en;

  return (
    <div className='articles-two-container' style={ changeOrder && {flexDirection}}>
        <div className='type-two-articles'>
            {articles.map((article, i) => {
                if(article?.articleType === 'Type2'){
                        return <ArticleTypeTwo key={i} article={article} />
                    }
                return null;
            })}
        </div>
        <div className='type-three-articles'>
            {articles.map((article, i) => {
                if(article?.articleType === 'Type3'){
                        return <ArticleTypeThree key={i} article={article} />
                    }
                return null;
            })}
        </div>
    </div>
  )
}

export default TypeTwo