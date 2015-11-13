import Reflux from 'reflux'
import HomeActions from '../actions/home-actions'
import SidebarActions from '../actions/sidebar-actions'

/*
 * Store handles data for the Home and Sidebar component
 * It triggers Home's compomnent's sendMessage() and
 * Sidebar's component's upcount() method.
 */

var HomeStore = Reflux.createStore({

  /*
   * This will hold our entire chat log.
   * We add messages to this array here, in this store,
   * and pass the array to the component when we do
   * this.trigger(storeMessages). The component then calls
   * this.setState({messages: storeMessages}) automatically
   * for us, because of the Reflux.connect mixin in the component
   */
  storeMessages: [],

  /*
   * This is shorthand, and prevents us from having to do
   * this.listenTo(Action.method, this.method)
   * listenables will automatically listen to all the
   * actions given to it. For example, it automatically calls
   * this.listenTo(ProblemAction.addIdea, this.addIdea), etc,
   * By giving your action methods and store method the same name,
   * reflux's listenable knows to connect them automatically.
   */

  listenables: [HomeActions],

  init: function() {
    /*
     * If we weren't using listenables above, we would have to do listenTo()
     * for every method we want to listen to.
     */

     // this.listenTo(HomeActions.sendMessage, this.sendMessage)
  },


  sendMessage: function() {
    /*
     * This is called when the component's button is clicked.
     * This will trigger the component's method we mapped listenTo() to,
     * passing the message string.
     * ps: two components are listening to this store: sidebar and home.
     * In sidebar, because we have:
     * mixins: [Reflux.listenTo(HomeStore, "updateCount")], it will trigger
     * the updateCount method.
     * In the home component, because we use Reflux.connect mixin,
     * mixins: [Reflux.connect(HomeStore, "messages")], it automatically
     * takes the argument passed via this.trigger(arg) and sets the component's
     * state to it
     */

     console.log('homestore :: sendMessage')
    var messageString = document.querySelector('input').value
    this.storeMessages.push({author: 'sqram', message: messageString})

    // Pass this storeMessages array to whoever is listening.
    // In our case, the sidebar component and home component
    this.trigger(this.storeMessages)
  }

})


export default HomeStore