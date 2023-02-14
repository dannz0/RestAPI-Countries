import { getJSON } from './helper';
import { GET_API_URL } from './config';

export const state = {
  countries: [],
  search: {
    query: '',
    result: {},
  },
};

const createStateObj = function (data) {
  Array.isArray(data) ? ([country] = data) : (country = data);

  return {
    countryName: country.name.official,
    nativeName: Object.values(country.name.nativeName)[0].common,
    population: country.population.toLocaleString(),
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital?.at(0),
    domain: country.tld?.at(0),
    currency: Object.values(country.currencies)[0].name,
    language: Object.values(country.languages).join(','),
    flags: country.flags.svg,
    neighbours: country.borders,
  };
};

export const loadCountry = async function (id) {
  if (!id) return;
  state.search.query = id;

  try {
    const data = await getJSON(GET_API_URL(id));

    if (Array.isArray(data) && data.length === 1)
      state.search.result = createStateObj(data);

    if (Array.isArray(data) && data.length > 1)
      data.forEach((c) => state.countries.push(createStateObj(c)));
  } catch (err) {
    throw err;
  }
};

export const clearState = function () {
  state.countries = [];
  state.search = {
    query: '',
    result: {},
  };
};
