const isLength = (...inputs) => {
  let counter = 0;
  for (let index of inputs) {
    counter++;
  }

  return counter;
};

export default isLength;
