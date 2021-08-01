import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSearchChange(e) {
    this.props.onSearchValue(e);
  }

  handleCheckboxChange(e) {
    this.props.onCheckboxValue(e);
  }

  render() {
    const { filterText } = this.props;
    const { petsAllowed } = this.props;

    return (
      <div className="search__wrap">
        <div className="container">
          <form className="search__form">
            <div className="search__container">
              <input
                className="search__field"
                type="text"
                placeholder="Start your search"
                value={filterText}
                onChange={this.handleSearchChange}
              />
              <button type="button" className="search__btn" />
            </div>
            <p>
              <input
                className="search__checkbox search__checkbox--pets"
                type="checkbox"
                id="petsCheckbox"
                values="yes"
                checked={petsAllowed}
                onChange={this.handleCheckboxChange}
              />{' '}
              <label htmlFor="petsCheckbox">Pets allowed</label>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
