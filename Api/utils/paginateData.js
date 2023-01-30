function paginatedData(DATA, Page, Limit = 12) {
  const page = parseInt(Page);
  const limit = parseInt(Limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  if (endIndex < DATA.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  results.totalPages = Math.ceil(DATA.length / limit);
  results.status = true;
  results.payload = DATA.slice(startIndex, endIndex);
  return results;
}

module.exports = paginatedData;
