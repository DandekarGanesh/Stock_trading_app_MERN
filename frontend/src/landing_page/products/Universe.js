import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div class="row text-center">
        <h1> The Stockbroker Universe </h1>

        <p> 
            Extend your trading and investment experience even further with our partner platforms 
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="img" style={{height: '55px'}} />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="img" style={{height: '55px'}}/>
           <p className="text-muted text-small">Algo & stratgy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" alt="img" style={{height: '55px'}} />
           <p className="text-muted text-small">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" alt="img" style={{height: '55px'}} />
          <p className="text-muted text-small">Assets management</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="img" style={{height: '55px'}} />
           <p className="text-muted text-small">Bonds trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" alt="img" style={{height: '55px'}} />
           <p className="text-muted text-small">Insurance</p>
        </div>

         <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width: '20%', margin: "0 auto"}}> 
                    Signup now 
         </button>
      </div>
    </div>
  );
}

export default Universe;
