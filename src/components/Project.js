import React from "react";
import im from "./Image/im.jpeg";
import Tata from "./Image/Tata.png";
import calc from "./Image/calc.png";
import clock from "./Image/clock.jpg";
import nw from "./Image/nw.jpg";
import mn1 from "./Image/mn1.jfif";
import "./Style.css";
const Project = () => {
  return (
    <div className="container">
      <div className="row mx-5">
        <div className="position-relative">
          <div className="position-absolute top-50 start-50">
            <h1 className="h1i">Projects</h1>
          </div>
        </div>
      </div>

      <div className="row my-5 mx-5">
        <div className="col my-5 mx-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src={im} className="card-img-top" alt="1" />
                <div className="card-body">
                  <h5 className="card-title">ArtWeb Site</h5>
                  <p className="card-text">
                    This is a simple website developed using HTML,CSS and
                    Bootstrap.
                    <div>
                      <br />

                      <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                {" "}
                                Preview
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary mx-5 btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                Git
                              </a>
                            </button>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={Tata} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Image Toggling</h5>
                  <p className="card-text">This is Simple Website developed using javascript .</p>
                  <div>
                    <br />
                   
                    <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn1"
                            >
                              <a href="https://sushma-04.github.io/Imagetoggling/">
                                {" "}
                                Preview
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary mx-5 btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                Git
                              </a>
                            </button>
                          </td>
                        </tr>
                      </table>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={clock} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Clock</h5>
                  <p className="card-text">
                    This is Simple website which displays cutternt time .
                  </p>
                  <div>
                    <br />
                    
                    <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn1"
                            >
                              <a href="https://sushma-04.github.io/timeclock/">
                                {" "}
                                Preview
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary mx-5 btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                Git
                              </a>
                            </button>
                          </td>
                        </tr>
                      </table>

                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={calc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Calculator</h5>
                  <p className="card-text">
                  This is simple website in which calculator is created.
                  </p>
                  <div>
                    <br />

                    <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn1"
                            >
                              <a href="https://sushma-04.github.io/calculate/">
                                {" "}
                                Preview
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary mx-5 btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                Git
                              </a>
                            </button>
                          </td>
                        </tr>
                      </table>



                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={nw} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Noteapp</h5>
                  <p className="card-text">
                    This is simple website in which calculator is created.
                  </p>
                  <div>
                    <br />
                    
                    <button type="button" className="btn btn-outline-primary btn1">
                      <a href="https://sushma-04.github.io/artweb/"> Git</a>
                    </button>


                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src={mn1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hotel Website</h5>
                  <p className="card-text">
                    This is a simple website developed using HTML and CSS.
                  </p>
                  <div>
                    <br />
                   

                    <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn1"
                            >
                              <a href="https://github.com/sushma-04/hotel.git">
                                {" "}
                                Preview
                              </a>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary mx-5 btn1"
                            >
                              <a href="https://sushma-04.github.io/artweb/">
                                Git
                              </a>
                            </button>
                          </td>
                        </tr>
                      </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
