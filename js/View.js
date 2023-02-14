export default class View {
  _parentEl;
  _errorBox;
  _spinner;
  _data;

  _detailEl = document.querySelector('.details');
  _countriesEl = document.querySelector('.countries');

  render(data) {
    if (!data || (Array.isArray(data) && !data.length))
      return this.renderError();

    this._data = data;

    const html = Array.isArray(data)
      ? data
          .map((markup) => {
            this._data = markup;
            return this._generateMarkup();
          })
          .join('')
      : this._generateMarkup();

    this._clear(this._parentEl);
    this._parentEl.insertAdjacentHTML('beforeend', html);
  }

  backBtnPage() {
    this._clear(this._parentEl);
    this._toggleDisplay('block', this._nextSection);
    this._toggleDisplay('block', this._section);
    this._toggleDisplay('block', this._countriesEl);
    this._toggleDisplay('none', this._btn);
  }

  _showHomePage() {
    this._toggleDisplay('block', this._section);
    this._toggleDisplay('none', this._btn);
  }

  _clear(...element) {
    [...element].forEach((e) => (e.innerHTML = ''));
  }

  _toggleDisplay(dis, ...element) {
    [...element].forEach((e) => (e.style.display = dis));
  }

  renderSpinner() {
    const html = `
    <div class="spinner-box">
      <div class="lds-dual-ring"></div>
    </div>
    `;

    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  renderError(err) {
    const html = `
    <div class="error-msg">
      <p>${err.message}</p>
    </div>
    `;

    this._getErrorbox();
    this._clear(this._errorBox);

    this._getSpinner();
    this._removeSpinner();

    this._parentEl.insertAdjacentHTML('afterbegin', html);
  }

  _getSpinner() {
    this._spinner = document.querySelectorAll('.spinner-box');
  }

  _getErrorbox() {
    this._errorBox = document.querySelectorAll('.error-msg');
  }

  _removeSpinner() {
    this._spinner.forEach((s) => s.remove());
  }
}

new View();
