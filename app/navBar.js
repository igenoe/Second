import React from "react";
import {Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './index.css';
library.add(faBars);

function Navbar() {
  return (
    <div className="navbar navbar-default" role="navigation">
       <button className="fa-bars-size" type="button">
                <i className="fa fa-bars"></i>
            </button>
      <Link to="/">Home</Link>
      <Link to="/enrollmentUpload">EnrollmentUpload</Link>
        <Link to="/paymentUpload">PaymentUpload</Link>
    </div>
  );
};

export default Navbar;