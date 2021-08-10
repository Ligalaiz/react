import { useState } from 'react';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import '../styles/index.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar
            searchRequest={searchRequest}
            setSearchRequest={setSearchRequest}
            setItems={setItems}
          />
        </div>
      </div>
      <div className="output__wrap">
        <SearchResult items={items} />
      </div>
    </>
  );
};

export default App;
