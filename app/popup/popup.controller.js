class PopupCtrl {
  constructor() {
  	this.modalShown = true;
  }

  toggleModal() {
  	this.modalShown = !this.modalShown;
  	console.log(this.modalShown);
  }

  hideModal() {
  	this.modalShown = !this.modalShown;
  }
}

PopupCtrl.$inject = [];

export default PopupCtrl;