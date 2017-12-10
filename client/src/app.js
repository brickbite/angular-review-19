// Write your Angular here!
angular.module('myApp', [])
  .component('appMain', {
    template:`
      <div>
        hello Angular!
        <br><br/>
        
        <interface get-messages="$ctrl.getMessages" send-message= "$ctrl.sendMessage"></interface>
        
        <br><br/>
        
        <div ng-if="$ctrl.viewing === 'friends'" ng-click="$ctrl.updateViewing()">Viewing Friends!</div>

        <div ng-if="$ctrl.viewing === 'rooms'" ng-click="$ctrl.updateViewing()">Viewing Rooms!</div>
        
        <br><br/>
        
        <message-list messages="$ctrl.messages"></message-list>
      </div> 
    `,
    controller: function(httpHelper) {
      this.messages = [];

      this.staticMessage = {
        username: 'angular',
        roomname: 'lobby',
        text: 'angular review!'
      }

      this.getMessages = () => {
        httpHelper.fetch(null, this.updateMessages);
      }

      this.sendMessage = (message) => {
        httpHelper.send(message, this.getMessages);
      }

      this.updateMessages = (messages) => {
        this.messages = messages;
      }

      this.viewing = 'rooms';

      this.updateViewing = () => {
        console.log(this.viewing);
        this.viewing === 'rooms' ? this.viewing = 'friends' : this.viewing = 'rooms'
      }

      // this.$onInit = () => console.log(httpHelper);

    }
  })