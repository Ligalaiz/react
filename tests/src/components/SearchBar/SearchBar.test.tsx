import { Search } from '../../../../src/components/Search/components/Search';
import { SearchForm } from '../../../../src/components/Search/components/SearchForm';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, fireEvent, act } from '@testing-library/react';

describe('Check SearchBar component', () => {
  test('Render SearchBar', () => {
    const { getByTestId } = render(
      <Router>
        <Search />
      </Router>,
    );

    const searchBar = getByTestId('searchBar');
    const searchInput = getByTestId('searchInput');
    const searchBtn = getByTestId('searchBtn');

    expect(searchBar).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });

  test('Check field changing', async () => {
    const handleSubmit = jest.fn();
    const handleSearchChange = jest.fn();

    const { getByTestId } = render(
      <Router>
        <SearchForm
          handleSubmit={handleSubmit}
          searchRequest="Epam"
          handleSearchChange={handleSearchChange}
        />
      </Router>,
    );
    const searchInput = getByTestId('searchInput');

    await act(async () => {
      fireEvent.change(searchInput, {
        target: { value: 'Epam' },
      });
    });
    expect(searchInput).toHaveValue('Epam');
  });

  test('Check request sending', async () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());
    const handleSearchChange = jest.fn();

    const { getByTestId } = render(
      <Router>
        <SearchForm
          handleSubmit={handleSubmit}
          searchRequest="Epam"
          handleSearchChange={handleSearchChange}
        />
      </Router>,
    );
    const searchBtn = getByTestId('searchBtn');

    fireEvent.click(searchBtn);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
