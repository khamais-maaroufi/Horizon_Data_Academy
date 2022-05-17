import React from "react";
//import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer bg-primary">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 className="pt-3" style={{ color: "white" }}>
              Contact Info
            </h4>
            <br></br>
            <h1 className="list" style={{ color: "white", fontSize: "15px" }}>
              <li>Tel: +216 92 062 181</li>
              <br></br>
              <li>Email: info@horizon-data.tn</li>
              <br></br>
              <li>Adresse: 184 jaafer km6 App n°9 2088</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 className="pt-3" style={{ color: "white" }}>
              Web site
            </h4>
            <br></br>
            <ui className="list " style={{ color: "white", fontSize: "15px" }}>
              <li>
                <a
                  href="https://www.horizon-data.tn"
                  style={{ color: "white", fontSize: "15px" }}
                >
                  www.horizon-data.tn
                </a>
              </li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className="pt-3" style={{ color: "white" }}>
              Services
            </h4>
            <br></br>
            <ui className="list  " style={{ color: "white", fontSize: "15px" }}>
              <li>Teaching computer science</li>
              <br></br>
              <li>Software engineering</li>
              <br></br>
              <li>Maintenance of software applications</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" style={{ color: "white", fontSize: "12px" }}>
            &copy;{new Date().getFullYear()} Updated | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
