// 1. importing teh component class
import React, {Component} from 'react';
import FirstComponent from "./fisrtcomponent.jsx";
// 2. creating React Component class
class SimpleComponent extends Component {
    // 2 b. define the HTML for rendering
    // 2 b.1 return() can have only one parent element
    render() {
        return(
             <div>
                <h2> The Simple Component!!!!!!</h2>
                <span>{this.props.msg}</span> 
                <ChildComponent/>     
                <br/>
                <FirstComponent/>         
             </div>   
        );
  }
}

class ChildComponent extends Component {
  render(){
    return(
        <div>
           <h3>I am a Child Component</h3>
        </div>
    );
  }
}



// 3. export the class for rendering
// (note): a jsx file can have only one export default
export default SimpleComponent;  