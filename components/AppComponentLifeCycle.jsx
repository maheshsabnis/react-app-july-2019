import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 0
      };

      this.increamentNumber = this.increamentNumber.bind(this);
   }

   increamentNumber() {
      this.setState({data: this.state.data + 1});
   }

   render() {
      return (
         <div>
            <button onClick = {this.increamentNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('In Component WILL MOUNT!')
   }
   // This method must contain all code that causes the state/props
   // updates based on any external calls
   componentDidMount() {
      console.log('In Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('In Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   // depricated
   componentWillUpdate(nextProps, nextState) {
      console.log('In Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('In Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('In Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;