import React from 'react';
import SearchBar from '../searchBar/SearchBar';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchValue = this.handleSearchValue.bind(this);
    this.handleCheckboxValue = this.handleCheckboxValue.bind(this);
    this.state = {
      filterText: '',
      petsAllowed: false,
    };
  }

  handleSearchValue(e) {
    this.setState({
      filterText: e.target.value,
    });
  }

  handleCheckboxValue(e) {
    this.setState({
      petsAllowed: e.target.checked,
    });
  }

  render() {
    return (
      <div className="wrap">
        <SearchBar
          petsAllowed={this.state.petsAllowed}
          filterText={this.state.filterText}
          onSearchValue={this.handleSearchValue}
          onCheckboxValue={this.handleCheckboxValue}
        />
        <ApartmentTable
          apartments={this.props.apartments}
          filterText={this.state.filterText}
          petsAllowed={this.state.petsAllowed}
        />
      </div>
    );
  }
}
