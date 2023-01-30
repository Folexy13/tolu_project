const DateGreaterThanToday = (date) => {
  return new Date(date).getTime() > new Date().getTime();
};

module.exports = {
  DateGreaterThanToday,
};
