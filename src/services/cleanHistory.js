function cleanHistory(history) {
  const asString = history.map(request => `${request.method}-${request.url}`);
  const uni = [...new Set(asString)];
  return uni.map(request => {
    const split = request.split('-');
    return {
      url: split[1],
      method: split[0]
    };
  });
}

export default cleanHistory;
