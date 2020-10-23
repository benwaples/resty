export const fetchUrl = (url, method, data) => {
  console.log(method);
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};
