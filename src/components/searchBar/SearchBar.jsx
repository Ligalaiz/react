export default function SearchBar(props) {
  const {
    searchRequest,
    setSearchRequest,
    setItems,
    sortType,
    setPageTotal,
  } = props;

  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const currentDate = `${date.getFullYear()}-${
    month < 10 ? `0${month}` : month
  }-${day < 10 ? `0${day}` : day}`;

  const link = `https://cors.bridged.cc/${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_FROM}${currentDate}&${process.env.SEARCH_PAGE_SIZE}10&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}1&${process.env.SEARCH_API_KEY}${process.env.API_KEY3}`;

  const data = {
    method: 'GET',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  };

  const loadSearchRequest = async (url) => {
    async function delay(response) {
      return new Promise((res) => {
        setTimeout(() => res(response), 1500);
      });
    }

    try {
      setItems([]);

      const response = await fetch(url, data).catch((e) =>
        console.log('Error: ', e.message),
      );

      let result = response.json();
      result = await delay(result);

      if (result.status !== 'ok') {
        throw Error(result.message);
      }

      const pages = Math.floor(result.totalResults / 10);
      setPageTotal(pages);
      setItems(result.articles || []);
    } catch (err) {
      console.log(err.message);
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
