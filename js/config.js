export const API_URL_ALLCOUNTRY = 'https://restcountries.com/v3.1/all';
export const API_URL_REGION = 'https://restcountries.com/v3.1/region/';
export const API_URL_NAME = 'https://restcountries.com/v3.1/name/';
export const TIMEOUT_SEC = 10;

export const GET_API_URL = function (id) {
  const regions = ['Europe', 'America', 'Africa', 'Asia', 'Oceania'];
  if (regions.includes(id))
    return `https://restcountries.com/v3.1/region/${id}`;

  if (id.length === 3) return `https://restcountries.com/v3.1/alpha/${id}`;
  if (id.length > 3 || id === 'uk')
    return `https://restcountries.com/v3.1/name/${id}`;

  throw new Error(`Not a valid country!`);
};
