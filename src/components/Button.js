// import React, { Component } from 'react';
// //import history from './history'

// class Button extends Component {

//     constructor() {
//         super()
//         this.state = {
//             firstButton: true,
//             nextButton: false
//         }
//     }

//     handlePage = (e) => {
//          if(e.target.id === 'homepage'){
//              console.log('home')
//              this.props.history.push('/home')
//          }
//          else
//          {
//              console.log('last')
//              this.props.history.push('/lastpage')
//          }
//         //console.log(e.target.id,'here you are')
//     }

//     render() {
//         return (
//             <div>
//                 <div id="footer">
//                     <button onClick={this.handlePage} id='homepage'>1</button>
//                     <button onClick={this.handlePage} id='lastpage'>2</button>
//                 </div>

//             </div>
//         );
//     }
// }

// export default Button