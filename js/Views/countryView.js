import View from '../View';

class CountryView extends View {
  _parentEl = document.querySelector('.details');
  _btn = document.querySelector('.btn--back');
  _section = document.querySelector('.section--details');
  _nextSection = document.querySelector('.section--search');
  _spinner;

  addHandlerGoBack(handler) {
    this._btn.addEventListener('click', handler);
  }

  backBtnPage() {
    this._getSpinner();

    this._clear(this._parentEl);
    this._removeSpinner();

    this._toggleDisplay('block', this._nextSection);
    this._toggleDisplay('grid', this._countriesEl);
    this._toggleDisplay('none', this._btn);
  }

  _generateMarkup() {
    this._toggleDisplay('grid', this._detailEl, this._btn);
    this._toggleDisplay('none', this._nextSection);

    return `
        <div class="details__image-box">
          <img
            src="${this._data.flags}"
            class="img__country--details"
            alt="flag of country"
          />
        </div>
        <div class="details__text-box">
          <div class="details__text">
            <h2 class="title__country">${this._data.countryName}</h2>
            <p class="text--nativename">Native name: <span> ${
              this._data.nativeName
            }</span></p>
            <p class="text--population">Population: <span> ${
              this._data.population
            }</span></p>
            <p class="text--region">Region: <span> ${
              this._data.region
            }</span></p>
            <p class="text--subregion">
              Sub region: <span> ${this._data.subRegion}</span>
            </p>
            <p class="text--capital">Capital: <span> ${
              this._data.capital
            }</span></p>
            <p class="text--domain">Domain: <span> ${
              this._data.domain
            }</span></p>
            <p class="text--currency">Currency: <span> ${
              this._data.currency
            }</span></p>
            <p class="text--language">Language: <span> ${
              this._data.language
            }</span></p>
          </div>
  
          <div class="details__text--neighbours">
              <p class="text-neighbour--main">Border Countries:</p>
              ${
                this._data.neighbours
                  ? this._data.neighbours
                      .map((n) => {
                        return `
                      <button class="btn btn--neighbour">
                          <p class="text-neighbour">${n}</p>
                      </button>
                      `;
                      })
                      .join('')
                  : ''
              }
          </div>
        </div>
          `;
  }
}

export default new CountryView();
