import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div><MDBFooter style={{backgroundColor:"#d6f0ee"}} className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom '>
      <div className='me-5 d-none d-lg-block text-dark'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div className='text-dark'>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>

    <section style={{color:'black'}}>
      <MDBContainer className='text-center text-dark text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 text-dark'>
            <h6 className='text-uppercase fw-bold mb-4 text-dark'>
              <MDBIcon icon="gem" className="me-3 text-dark" />
              CareOne
            </h6>
            <p>
            It is the journey that takes you to new destinations every day with endless possibilities of 
            life on the back of happiness, energy, and hope. CareOne wants to make this journey easy for every
             Indian and help them live healthier and longer lives.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-dark'>
            <h6 className='text-uppercase fw-bold mb-4 text-dark'>Patient Care</h6>
            <p>
              <a href='#!' className='text-dark'>
                Medical Value Travel
              </a>
            </p>
            <p>
              <a href='#!' className='text-dark'>
               Video Consultation
              </a>
            </p>
            <p>
              <a href='#!' className='text-dark'>
                Book an Appointment
              </a>
            </p>
            <p>
              <a href='#!' className='text-dark'>
               Frequently Asked Questions
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-dark'>
            <h6 className='text-uppercase fw-bold mb-4 text-dark'>Multispeciality</h6>
            <p>
              <a href='#!' className='text-dark'>
                Physical Medicine & Rehabilitation
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Internal Medicine
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
              Emergency Medicine
              </a>
            </p>
            
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-dark'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@careone.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright:
      <a className='text-dark fw-bold' href='https://mdbootstrap.com/'>
        CareOne.com
      </a>
    </div>
  </MDBFooter>
  </div>
  )
}

export default Footer