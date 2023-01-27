import Header from './components/Header/Header';
import SectionArticle from './components/SectionArticle/TypeOne/TypeOne';
import SectionArticleTypeTwo from './components/SectionArticle/TypeTwo/TypeTwo';
import SectionQuote from './components/SectionQuote/SectionQuote';
import SectionClients from './components/SectionClients/SectionClients';
import SectionContact from './components/SectionContact/SectionContact';
import Footer from './components/Footer/Footer';
import firstList from './assets/json/articles-1.json';
import secondList from './assets/json/articles-2.json';
import thirdList from './assets/json/articles-3.json';
import fourthList from './assets/json/articles-4.json';
import fifthList from './assets/json/articles-5.json';
import sixthList from './assets/json/articles-6.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className='display-options'>
        </div> */}
      <SectionArticle list={firstList} />
      <SectionArticleTypeTwo list={fifthList}/>
      <SectionArticle list={secondList} />
      <SectionArticleTypeTwo list={sixthList} changeOrder={true}/>
      <SectionArticle list={thirdList} />
      <SectionQuote />
      <SectionArticle list={fourthList} />
      <SectionClients />
      <SectionContact />
      <Footer />
    </div>
  );
}

export default App;
