export var homeComponent = {
  templateUrl: './home/home.html',
  bindings: {},
  controller: homeController
};

function homeController() {
  var vm = this;
  vm.title = 'Awesome, Inc. Internal Ordering System';
}
