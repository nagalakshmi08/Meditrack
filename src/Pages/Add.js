import React, { useEffect } from 'react';
import '../main';



function Add() {
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('http://localhost:3000/add', 
          {name,
          email,
          medicine,
          mfd,
          exp});
          console.log('Data submitted successfully');
        } catch (error) {
          console.error(error);
        }
      };

    function generateqr(e) {
        e.preventDefault();  // Prevent the default form submission behavior
      
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var medicine = document.getElementById('medicine').value;
        var mfd = document.getElementById('mfd').value;
        var exp = document.getElementById('exp').value;
        console.log('Name: ' + name + " " + email + " " + medicine + " " + mfd);
      
        var url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Name:" +
          name + "%0a Email: " + email + " Medicine name: " + medicine + " Mfd: " + mfd + " Expiry Date: " + exp;
      
        var ifr = `<iframe src="${url}" height="200" width="200"></iframe>`;
      
        document.getElementById('qrcode').innerHTML = ifr;
      }
      
  return (
    <div>
      <section className="ftco-section">
        <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Data Form</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-md-3">
                    <div id="qrcode" className="mt-5 text-center"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="row no-gutters">
                      <div className="col-lg-12 col-md-12 order-md-last d-flex align-items-stretch">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                          <h3 className="mb-4">Pharma details</h3>
                          <div id="form-mfd-warning" className="mb-4"></div>
                          <form
                            method="POST"
                            id="contactForm"
                            name="contactForm"
                            className="contactForm"
                          >
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="name">
                                    Company Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="label" htmlFor="email">
                                    Email Address
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="medicine">
                                    Medicine name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="medicine"
                                    id="medicine"
                                    placeholder="Medicine name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="mfd">
                                    Manufacturing Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="mfd"
                                    id="mfd"
                                    placeholder="Mfd"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="label" htmlFor="exp">
                                    Expiry Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="exp"
                                    id="exp"
                                    placeholder="Expiry"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    value="Submit"
                                    className="btn btn-primary"
                                    onClick={(e) => generateqr(e)}
                                  />
                                  <div className="submitting"></div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
      </section>
    </div>
  );
}

export default Add;
