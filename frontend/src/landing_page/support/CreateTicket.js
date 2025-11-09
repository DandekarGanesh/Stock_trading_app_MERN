import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online account opening</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline account opening</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company partnership and HUF account</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Opening status or delay</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>NRI account related queries</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges at stock broker</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Bank linked 3-in-1 account</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting started guide</a><br />
        </div>

        
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Funds & Payments
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Add funds to trading account</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Withdraw funds to bank</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>UPI / Netbanking issues</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund transfer delays</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Payment gateway errors</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Deposit confirmation not received</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Trading & Orders
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Order not executed</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Intraday trade related query</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Bracket or cover order issue</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Price freeze or limit hit</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Error in margin calculation</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trade report mismatch</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Square-off or auto-close issue</a><br />
        </div>

      
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Demat & Holdings
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Shares not visible in holdings</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Pledge / unpledge shares</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer shares from another broker</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Dematerialisation of physical shares</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate action update delay</a><br />
        </div>

       
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Profile & KYC
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Update PAN or Aadhaar</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Change registered mobile number</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Modify email or address details</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Re-KYC or document resubmission</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nominee update or deletion</a><br />
        </div>

     
        <div className="col-4 p-5 mt-2 mb-2">
          <h4>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Reports & Statements
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Download trade reports</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>View ledger or margin statements</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Profit and loss report issue</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Tax P&L or capital gains statement</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Contract note not received</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Error in downloadable reports</a><br />
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
