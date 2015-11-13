import React from 'react'
import Reflux from 'reflux'
import HomeActions from '../actions/home-actions'
import HomeStore from '../stores/home-store'
import Form from '../components/form'


var Home = React.createClass({

  /*
   * Here we tell which method in this component we want
   * to be notified when the store triggers an event
   * In our case, when HomeStore's sendMessage calls this.trigger(),
   * we want this component's sendMessage to be called.
   */

  // getInitialState: function() {
  //  return { messages: [] }
  // },
  //mixins: [Reflux.listenTo(HomeStore, "sendMessage")],

  /*
   * Taking the mixins above one step further, we can use
   * Reflux.connect - Reflux.connect(listener, [stateKey]).
   * which does everything Reflux.listenTo does, plus updates our
   * component's state for us to whatever the store sends back.
   * It's so much magic, we don't even have to do
   * getInitialState( {message:[]} ), this does it for us.
   * If you don't want to use Reflux.connect, you can use
   * Reflux.listenTo (in the mixins commented out above) and
   * inside the sendMessage method, call this.setState({messages: msg})
   */

  mixins: [Reflux.connect(HomeStore, "messages")],

  sendMessage: function(msgObject) {

    /*
     * If we were using the Reflux.listenTo mixin, we'd manually
     * update this component's state here, with whatever the
     * store triggers this method with (msgObject). But
     * Reflux.connect mixin does this for us automatically
     */
    /*this.setState({
      messages: this.state.messages.concat(msg)
    })*/
  },



  render: function () {
    // loop through our messages
    if (this.state.messages) {
      var message = this.state.messages.map((messageObject, i) => {
        return <div key={i}>
          <span>{messageObject.author}:</span>
          <span>{messageObject.message}</span>
        </div>
      })
    }

    var view = <div>
      <section>{message}</section>
      <Form />
    </div>
    return view

  }

});




export default Home

