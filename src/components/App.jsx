import { useState } from 'react';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import SortBar from './sortBar/SortBar';
import '../styles/index.scss';

const App = () => {
  const [sortType, setSortTipe] = useState('relevancy');
  const [items, setItems] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar
            searchRequest={searchRequest}
            setSearchRequest={setSearchRequest}
            setSortTipe={setSortTipe}
            setItems={setItems}
            sortType={sortType}
          />
        </div>
        <div className="sort__wrap">
          <SortBar setSortTipe={setSortTipe} sortType={sortType} />
        </div>
      </div>
      <div className="output__wrap">
        <SearchResult items={items} />
      </div>
    </>
  );
};

export default App;
