import { useState } from 'react';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import SortBar from './sortBar/SortBar';
import PageBar from './pageBar/PageBar';
import Loader from './loader/Loader';
import '../styles/index.scss';

const App = () => {
  const [error, setError] = useState(null);
  const [sortType, setSortTipe] = useState('relevancy');
  const [pageSize, setPageSize] = useState('1');
  const [pageNumber, setPageNumber] = useState('1');
  const [pageTotal, setPageTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar
            setLoading={setLoading}
            setError={setError}
            searchRequest={searchRequest}
            setSearchRequest={setSearchRequest}
            setPageTotal={setPageTotal}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            pageSize={pageSize}
            setSortTipe={setSortTipe}
            setItems={setItems}
            sortType={sortType}
          />
        </div>
        <div className="sort__wrap">
          <SortBar setSortTipe={setSortTipe} sortType={sortType} />
        </div>
        <div className="pageBar__wrap">
          <PageBar
            items={items}
            pageTotal={pageTotal}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      </div>
      <div className="output__wrap">
        <SearchResult items={items} />
      </div>
      {error && (
        <div className="message__wrap">
          <div className="message">
            <p>{error.message}</p>
            <button
              className="message__btn"
              type="button"
              onClick={() => setError(null)}
            >
              close
            </button>
          </div>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
};

export default App;
