// Write your Angular here!
angular.module('myApp')
  .component('messageEntry', {
    template:`
      <div>
        {{$ctrl.message.username + '(' + $ctrl.message.roomname + '): ' + $ctrl.message.text}}
      </div>
    `,
    bindings: {
      message: '<'
    }
  })