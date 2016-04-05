class PopupCtrl {
  constructor() {
  	this.modalShown = false;
  }

  openModal() {
  	this.modalShown = !this.modalShown;
  }

  hideModal() {
  	this.modalShown = false;
  }
}

PopupCtrl.$inject = [];

export default PopupCtrl;