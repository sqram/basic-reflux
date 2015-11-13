![alt screenshot](http://i.imgur.com/1i4bKcZ.jpg)


### `This Git`
**I wrote this for myself, so i can use as a quick reference.**  
This Git shows a simple example of a reflux app to show  
communication between unrelated components.  
There are two main components: Home and Sidebar. They are  
separate and not parent/child of each other.  

Home component has a child component, Form.  
Form handles all user input - the input field and the button  
The chat log is part of Home. it should be a separate component but  
I didn't want to break the app down too much for simplicity's sake  

This app takes the user's input from the Form component,  
the HomeStore stores it, then sets the Home component's state to it,  
updating the view  

Then the Sidebar at the top is there just to show you how to  
communicate between unrelated components - which is by making  
both those components listen to events from the HomeStore  

Start by reading main.js, then home.js, then homestore.js, then  
sidebar.js if you want.  
The main parts here are home.js and home-store.js

##### flow idea
Event in component calls an action: ie, onClick={FooAction.login}  
this triggers FooStore.login()
All components listening to FooStore, call a method specified  
In that method, change the component's state to match the stores'  

#### The gist:
1. You'll need a Reflux Action, Reflux Store, React Component
2. Components call Action method directly
   * &tt;button onClick={MyAction.sendMessage}&gt;

3. Connect Stores to the Actions via listenables or listenTo
    * listenable: [MyAction],
    * or, this.listenTo(MyActions.foo, this.foo)

4. Connect Components to Stores via mixins.
    * mixins: [Reflux.listenTo(MyStore, "sendMessage")], or,
    * mixins: [Reflux.connect(MyStore, "sendMessages")]
    * technically you are making the component listen to store  
      events. In the store, you call this.trigger(data_to_pass),  
      and the Component will respond, because you did either  
      Reflux.listenTo or Reflux.connect in the component.  
  

#### Thing to remember:
The components only care about the state of the stores.  
Basically, you can't map a store's signal to a component's  
method. In the component, you'll have, for example  
mixins: [Reflux.listenTo(HomeStore, "updateCount")].  
This means whenever HomeStore calls this.trigger(arg),   
the component's updateCount(arg) will fire. And in updateCount,  
you should make the component's state match the store's state  
(which we pass via _arg_ in this.trigger(arg))





