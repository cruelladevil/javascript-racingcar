const generateRandomNumberBetween = (min, max) => {
  return min + Math.floor(Math.random() * max);
};

export default generateRandomNumberBetween;
