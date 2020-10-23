export const fetchUrl = (url, method, data) => {
  try {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch(error) {
    throw new Error(error);
  }
};
