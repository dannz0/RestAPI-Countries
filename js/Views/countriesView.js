import View from '../View';

class CountriesView extends View {
  _parentEl = document.querySelector('.countries');
  _selectEl = document.querySelector('#form__input--select');
  _spinnerBox = document.querySelector('.details');
  _value;

  addHandlerFilter(handler) {
    this._selectEl.addEventListener('change', (e) => {
      this._value = e.target.value;

      handler();
      this._clear(this._spinnerBox);
    });
  }

  getID() {
    if (!this._value) return;
    return this._value;
  }

  _generateMarkup() {
    return `
  <div class="country">
    <div class="country__img-box">
      <img
        src="${this._data.flags}"
        class="country__img"
        alt="flag of country"
      />
    </div>
    <div class="country__text-box">
      <h3 class="title__country">${this._data.countryName}</h3>
      <p class="text--population">
         Population:<span> ${this._data.population}</span>
      </p>
      <p class="text--region">Region:<span> ${this._data.region}</span></p>
      <p class="text--capital">Capital:<span> ${this._data.capital}</span></p>
    </div>
  </div>
          `;
  }
}

export default new CountriesView();
