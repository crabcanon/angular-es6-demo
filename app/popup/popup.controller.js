class PopupCtrl {
  constructor() {
    // $scope.modalShown = false;
    this.modalShown = false;
  }
  
  // $scope.openModal = function() {}
  openModal() {
    this.modalShown = !this.modalShown;
  }
  
  // $scope.hideModal = function() {}
  hideModal() {
    this.modalShown = false;
  }
}

PopupCtrl.$inject = [];

export default PopupCtrl;