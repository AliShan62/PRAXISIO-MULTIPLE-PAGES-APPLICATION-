
import sitelogo from '../assets/images/SKPlogo.jpg';
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
const Categories = () => {

  const [selectedOption, setSelectedOption] = useState("Navbar");
  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
    return (
    <>
      <div className="header2" id='banner'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 d-flex justify-content-start">
            <div className="left-logo">
              <a href="#." style={{ textDecoration: 'none', marginLeft: "10px" }}>
                <span><h4><strong style={{ color: "white" }}>PRAXISIO</strong></h4></span>
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

          <div className="col-md-4 d-flex justify-content-end ">
            {/* <div className="navbar navbar-icons">
             
             <i  class="fa fa-fw fa-save"></i>
             <i class="fa fa-fw fa-user"></i>
             <i  class="fa fa-fw fa-info-circle"></i>
           
                                
            </div> */}
                          <div className="navbar navbar-icon  mx-5" >
                                <i class="fa fa-fw fa-save"></i>
                                <i class="fa  fa-fw fa-info-circle"></i>
                                <i class="fa fa-fw fa-user"></i>
                               
                            </div>
          </div>

        </div>
      </div>
         </div>
     
            <div className="Footer">
                <div className="container">
                  

                    <div className="row ">
                        <div className="col-md-6 col-lg-3 col-12 ft-1">

                          <a href='/'>
                          <img src={sitelogo} alt="" className='sitelogo' style={{cursor:'pointer'}}/>
                            </a>  
                            
                        </div>
                        <div className="col-md-10 col-lg-5 col-12 ft-2" style={{textAlign:'center'}}>
                            <p>CODES | CHEMICALS | MEDICINES | CALCULATION</p>
                       <p>E-Mail: info@skpdevelopers.com</p> 
                       <p>A Project of SKP Developers by Muqeem Malik <br></br>University of Education, Township, Lahore</p>
                           
                        </div>
                        <div className=" Feedback col-md-6 col-lg-4 col-12 ft-3">
                            <ul>Feedback and Complains</ul>
                          <form style={{display:'flex'}}>
                          <textarea  cols="30" placeholder=' Enter your message here...'>
                            
                          </textarea>
                          <button  type="submit"  class="btn border-white text-white  px-2 mx-1" >submit</button>  
                          </form>  
                           <div className="footer-icons mt-4 mx-5 " >
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
              

     
        </>
    )
}

export default  Categories;