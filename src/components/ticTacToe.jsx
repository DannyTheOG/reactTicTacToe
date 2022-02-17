import React,  {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class TicTacToe extends Component {
     state = {
          count: new Date().toLocaleTimeString(),
     };

     styles = {
          fontSize: 20,
          fontWeight: "bold"
     };

     // componentDidMount() {
     //      setInterval(() => {
     //           this.setState({count: new Date().toLocaleTimeString()});
     //      }, 1000);
     // }
    
     render() {
          return (
               <div>
                    <span style={this.styles} className="m-2">{new Date().toLocaleTimeString()}</span>
                    {/* <button className="btn btn-primary">Increment</button> */}
               </div>
          )
     };

     
}



export default TicTacToe;
