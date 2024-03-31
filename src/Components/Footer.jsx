import React from 'react'

function Footer() {
  return (
    <div>
       {/* //  here is my footer */}
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
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <ul>Feedback and Complains</ul>
                          <form style={{display:'flex'}}>
                          <textarea  cols="30" placeholder=' Enter your message here...'>
                            
                          </textarea>
                          <button  type="submit"  class="btn border-white  px-2 mx-1" >submit</button>  
                          </form>  
                           <div className="footer-icons mt-4 mx-5" >
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer
