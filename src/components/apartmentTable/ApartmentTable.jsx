import React from 'react';

export default class ApartmentTable extends React.Component {
  render() {
    const { apartments } = this.props;
    const { petsAllowed } = this.props;
    const filterText = this.props.filterText.toLowerCase();
    const result = [];

    apartments.forEach((apartment) => {
      const apartmentName = apartment.name.toLowerCase();
      if (petsAllowed && !apartment.pets) {
        return;
      }

      if (apartmentName.indexOf(filterText) === -1) {
        return;
      }
      result.push(
        <div className="apartment__item" key={apartment.name}>
          <div className="apartment__image">
            <img src={apartment.image} alt={apartment.name} />
          </div>
          <div className="apartment__info">
            <p className="apartment__name">{apartment.name}</p>
            <p className="apartment__description">{apartment.description}</p>
            <ul className="apartment__optional optional reset-list">
              <Optional apartment={apartment} />
            </ul>
            <div className="apartment__subDescription">
              {apartment.rating ? (
                <div className="apartment__rating">
                  {apartment.rating}
                  <span className="apartment__reviews">
                    {' '}
                    ({apartment.reviews} reviews)
                  </span>
                </div>
              ) : (
                ''
              )}
              <div className="apartment__price">
                <span className="apartment__num">{apartment.price}$</span> /
                month
              </div>
            </div>
          </div>
        </div>,
      );
    });

    return (
      <div className="apartment__wrap">
        <div className="container  apartment__grid">{result}</div>
      </div>
    );
  }
}
