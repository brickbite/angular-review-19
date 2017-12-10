// Write your Angular here!
angular.module('myApp')
  .component('messageList', {
    template:`
      <div>
        Message List:
        <message-entry ng-repeat="message in $ctrl.messages" message="message"></message-entry>
      </div>
    `,
    bindings: {
      messages: '<'
    }
  })