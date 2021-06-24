const STARS_COUNT = 5;

const getOffersByCity = (offers, activeCity) =>
  offers.filter(({city}) => city.name  === activeCity);

const getRating = (rating) =>
  `${((rating / STARS_COUNT) * 100)}%`;

const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export {
  getOffersByCity,
  getRating,
  uppercaseFirstLetter
};
