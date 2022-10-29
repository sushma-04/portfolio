import React from "react";
import gitlogo from "./Image/gitlogo.png";
import ln1 from "./Image/link.png";
import gm from "./Image/mll.png";

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row mx-5">
        <div className="position-relative">
          <div className="position-absolute top-50 start-50">
            <h1 className="h1i">Contact </h1>
          </div>
        </div>
      </div>

      <div className="row row-cols-2 my-5 mx-5">
        <div className="col my-5">
          <table>
            <tbody>
              <tr>
                <br />
              </tr>
              <tr className="mx-5">
                <td className="mx-5">
                  <a href="https://github.com/sushma-04">
                    {" "}
                    <img src={gitlogo} height="130 px" width="130px" />
                  </a>
                </td>
              </tr>
              <tr>
                <br />
              </tr>

              <tr>
                <td>
                  <a href="https://www.linkedin.com/in/sushma-shelke-0800a1220/">
                    {" "}
                    <img src={ln1} height="130 px" width="130px" />
                  </a>
                </td>
              </tr>
              <tr>
                <br />
              </tr>

              <tr>
                <td>
                  <a href="https://mail.google.com/">
                    {" "}
                    <img src={gm} height="130 px" width="130px" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col my-5">
          <form
            className="my-4"
            action="mailto:sushmashelke074@gmail.com"
            method="post"
            target="_self"
          >
            <div className="mb-3">
              <br />
              <label htmlFor="">Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleDropdownFormEmail2"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <br />
              <label
                htmlFor="exampleDropdownFormEmail2" className="form-label">
                Email address
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleDropdownFormPassword2"
                placeholder="email@gmail.com"
              />
            </div>
            <br />
            <div className="mb-3">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  defaultValue={""}
                />
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
            </div>
            <br />

            <button type="submit" className="btn btn-outline-primary btn1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
