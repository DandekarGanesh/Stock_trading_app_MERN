import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}
            className="text-muted"
          >
            <li>
              Quickly calculate brokerage for equity delivery, intraday, and F&O
              trades with accuracy
            </li>
            <li>
              Get a detailed and transparent breakdown of exchange and
              transaction charges in seconds
            </li>
            <li>
              Instantly know your total trading cost per executed order with
              live rate updates
            </li>
            <li>
              Includes SEBI turnover, GST, and all additional regulatory
              calculations in one place
            </li>
            <li>
              Fully supports both NSE and BSE market trades with updated values
              and fees
            </li>
            <li>
              Helps compare brokerage and hidden charges across all trading
              segments easily
            </li>
            <li>
              Provides clear insight into net profit or loss after all
              deductions and taxes
            </li>
            <li>
              Always updated and 100% accurate as per latest SEBI and exchange
              guidelines
            </li>
            <li>
              Allows traders to plan trades effectively by analyzing cost impact
              before execution
            </li>
            <li>
              User-friendly, mobile-responsive, and perfect for both beginners
              and advanced investors
            </li>
          </ul>
        </div>

        <div className="col-4 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
