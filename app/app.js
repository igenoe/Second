import React, { Component } from 'react';
import { Route, Link ,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import EnrollmentUpload from './enrollmentUpload/index.jsx';
import PaymentUpload from './paymentUpload/index.jsx';
// import {Navbar,Nav} from "react-bootstrap";

import Navbar  from './navBar';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import './index.css';
// library.add(faBars);

class App extends Component {
    render() {
      return (
        // <div className="navbar navbar-default" role="navigation">
        //     <button className="fa-bars-size" type="button">
        //         <i className="fa fa-bars"></i>
        //     </button>
        //   <ul>
        //     <li><Link to="/">Home</Link></li>
        //     <li><Link to="/enrollmentUpload">EnrollmentUpload</Link></li>
        //     <li><Link to="/paymentUpload">PaymentUpload</Link></li>
        //   </ul>
  
        //     <Route path="/" component={PaymentUpload} exact />
        //     <Route path="/enrollmentUpload" component={EnrollmentUpload} />
        //     <Route path="/paymentUpload" component={PaymentUpload} />
        // </div>
        <main>
            <Navbar />
            <Switch>
                    <Route path="/" component={PaymentUpload} exact />
                    <Route path="/enrollmentUpload" component={EnrollmentUpload} />
                    <Route path="/paymentUpload" component={PaymentUpload} />
                
            </Switch>
        </main>
      );
    }
  }
  
  export default App;
// function App() {
//     return (
//         <main>
//             <Navbar />
//             {/* <Switch>
//                 <Route path="/" component={Home} exact />
//                 <Route path="/about" component={About} />
//                 <Route path="/shop" component={Shop} />
//                 <Route component={Error} />
//             </Switch> */}
//             <Switch>
//                 <Route path="/" component={PaymentUpload} exact />
//                 <Route path="/enrollmentUpload" component={EnrollmentUpload} />
//                 <Route path="/paymentUpload" component={PaymentUpload} />
//             </Switch>
//         </main>
//     )
// }