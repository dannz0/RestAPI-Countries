import View from '../View';

class SearchView extends View {
  _parentEl = document.querySelector('.form');
  _input = document.querySelector('.search__input');

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
      this._clear();
    });
  }

  getID() {
    if (this._input.value < 1) return;

    return this._input.value;
  }

  _clear() {
    this._input.value = '';
  }
}

export default new SearchView();
