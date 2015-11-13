import React from 'react'
import HomeActions from '../actions/home-actions'


/*
 * Form component - handles all user input.
 * So technically, just the button click. This
 * component is a child component of Home
 */

var Form = React.createClass({
  render: function() {
    var view = <div>
      <input placeholder='type message here' />
      <button onClick={HomeActions.sendMessage}>Send</button>
    </div>

    return view
  }
})

export default Form