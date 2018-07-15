const template = require('./navigation.html');

export const navigationComponent = {
  template: template,
  bindings: {},
  controller: navigationComponentController
};

function navigationComponentController() {
  var vm = this;
  vm.companyName = 'Awesome, Inc.';
}
