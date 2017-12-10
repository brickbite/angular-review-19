// Write your Angular here!
angular.module('myApp')
  .component('interface', {
    template:`
      <div>
        <input ng-model="$ctrl.text"/>
        <button ng-click="$ctrl.sendMessage()">Send Message</button>
        <br/><br/>
        <button ng-click="$ctrl.getMessages()">Get Messages</button>
        <br/><br/>
      </div>
    `,
    bindings: {
      getMessages: '<',
      sendMessage: '<'
    },
    controller: function() {
      this.text = '';
      this.$onInit = () => {
        // console.log(this.getMessages);
      }
    }
  })