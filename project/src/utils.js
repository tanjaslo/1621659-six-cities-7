const STARS_COUNT = 5;

const getRating = (rating) =>
  `${((rating / STARS_COUNT) * 100)}%`;

const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export {
  getRating,
  uppercaseFirstLetter
};
