import * as modal from './modal';

import countriesView from './Views/countriesView';
import countryView from './Views/countryView.js';
import searchView from './Views/searchView';
import neighbourView from './Views/neighbourView';

const controlCountry = async function () {
  const id =
    searchView.getID() ||
    neighbourView.getID() ||
    countriesView.getID() ||
    'Europe';

  try {
    countryView.renderSpinner();

    countriesView.renderSpinner();

    await modal.loadCountry(id);

    if (modal.state.search.result.countryName)
      countryView.render(modal.state.search.result);

    if (modal.state.countries.length) {
      countriesView.render(modal.state.countries);
    }

    modal.clearState();
  } catch (err) {
    console.log(err);
    countryView.renderError(err);
  }
};

const controlBtnBack = function () {
  countryView.backBtnPage();
};

const init = function () {
  controlCountry();
  countryView.addHandlerGoBack(controlBtnBack);
  countriesView.addHandlerFilter(controlCountry);
  searchView.addHandlerSearch(controlCountry);
  neighbourView.addHandlerGoTo(controlCountry);
};
init();
