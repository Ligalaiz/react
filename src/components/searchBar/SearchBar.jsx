export default function SearchBar(props) {
  const {
    searchRequest,
    setSearchRequest,
    setItems,
    sortType,
    pageSize,
    pageNumber,
    setPageTotal,
    setPageNumber,
    setError,
    setLoading,
  } = props;

  const link = `${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_PAGE_SIZE}${pageSize}&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}${pageNumber}`;

  const data = {
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.API_KEY}`,
    },
  };

  const loadSearchRequest = async (url) => {
    async function delay(response) {
      return new Promise((res) => {
        setTimeout(() => res(response), 1500);
      });
    }

    try {
      setLoading(true);
      setItems([]);

      const response = await fetch(url, data).catch((e) =>
        console.log('Error: ', e.message),
      );

      let result = response.json();
      result = await delay(result);

      if (result.status !== 'ok') {
        throw Error(result.message);
      }

      const pages = result.total_pages;

      setPageTotal(pages);
      setLoading(false);
      setItems(result.articles || []);
    } catch (err) {
      setError(err);
      setLoading(false);
      setPageNumber('1');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      loadSearchRequest(link);
    }
  };

  const handleSearchChange = (e) => {
    const { target } = e;
    const { value } = target;
    setSearchRequest(value);
  };

  return (
    <>
      <div className="search__wrap">
        <div className="container">
          <form className="search__form" onSubmit={handleSubmit}>
            <div className="search__container">
              <input
                className="search__field"
                placeholder="Start your search"
                value={searchRequest}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="search__btn"
                disabled={searchRequest < 3}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
