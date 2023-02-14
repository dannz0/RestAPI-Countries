import View from '../View';

class NeighbourView extends View {
  _parentEl = document.querySelector('.details__text--neighbours');
  _btn = document.querySelector('.btn--neighbour');
  _target;

  addHandlerGoTo(handler) {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.btn--neighbour') || e.target.closest('.country')) {
        const target =
          e.target
            .closest('.btn--neighbour')
            ?.querySelector('.text-neighbour') ||
          e.target
            .closest('.country')
            ?.querySelector('.country__text-box')
            ?.querySelector('.title__country');

        this._target = target;

        handler();
        this._target = '';
      }
      return;
    });
  }

  _hideLayouts() {
    this._toggleDisplay('none', this._countriesEl);
    this._clear(this._detailEl);
  }

  getID() {
    if (!this._target) return;

    this._hideLayouts();
    return this._target.textContent;
  }
}

export default new NeighbourView();
