
import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [selectedOption, setSelectedOption] = useState("Navbar");

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <div className="header" id='banner'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-start">
            <div className="left-logo">
              <a href="#." style={{ textDecoration: 'none', marginLeft: "10px" }}>
                <span><h1><strong style={{ color: "white" }}>PRAXISIO</strong></h1></span>
              </a>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className="center-dropdown">
              <NavDropdown title={selectedOption} id="basic-nav-dropdown" onSelect={handleSelect}>
                <NavDropdown.Item eventKey="Calculations">Calculations</NavDropdown.Item>
                <NavDropdown.Item eventKey="Medicines">Medicines</NavDropdown.Item>
                <NavDropdown.Item eventKey="Chemicals">Chemicals</NavDropdown.Item>
                <NavDropdown.Item eventKey="Code">Code</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-end">
            <div className="navbar">
              <a className="active" href="#"><i className="fa fa-fw fa-save"></i> </a>
              <a href="#"><i className="fa fa-fw fa-info-circle"></i> </a>
              <a href="#"><i className="fa fa-fw fa-user"></i> </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Header;
