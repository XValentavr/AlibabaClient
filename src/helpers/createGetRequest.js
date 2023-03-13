export const createGetRequest = (url, params) => {
  return Object.keys(params).reduce(
    (newUrl, key, id) => `${newUrl}${id ? '&' : '?'}${key}=${encodeURIComponent(params[key])}`,
    url,
  );
};