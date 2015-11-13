import React from 'react'
import Reflux from 'reflux'
import HomeStore from '../stores/home-store'

var Sidebar = React.createClass({

  /*
   * Make this component listen to HomeStore. Whenever
   * HomeStore triggers an event, run updateCount.
   * We can't use Reflux.connect mixin here, the store's
   * this.trigger() passes the array of messages, and we
   * actually need just its length. So because we need that extra
   * logic, we can't have Reflux.connect automagically set
   * our count state.
   */

  mixins: [Reflux.listenTo(HomeStore, "updateCount")],

  getInitialState: function() {
    return { count: 0 }
  },

  updateCount: function(messages) {
    this.setState({count: messages.length})
  },

  render: function () {
    return <div>{this.state.count}</div>
  }

});

export default Sidebar