import React from 'react';

function Awards() {
    return ( 
       <div className="container mt-5">
          <div className="row">

            <div className="col-6 p-5">
              <img src="media/images/largestBroker.svg" alt="" />
            </div>

            <div className="col-6 p-5 mt-5">
                <h1> Largest Stock Broker in Asia </h1>
                <p className='mb-5'> 4+ million StockBroker clients contribute to over 21%  of all volumes in Asia daily by trading and investing in: </p>

                <div className="row">
                  <div className="col-6">

                     <ul>
                      <li> 
                        <p> Future and options</p>
                      </li>

                      <li> 
                        <p> Commodity deravatives </p>
                      </li>

                      <li> 
                        <p> Currency deravatives</p>
                      </li>
                    </ul>

                  </div>

                  <div className="col-6">

                     <ul>
                        <li> 
                          <p> Stock & IPO </p>
                        </li>

                        <li> 
                          <p> Direct mutual fund </p>
                        </li>

                        <li> 
                          <p> Bond and Gov Securities</p>
                        </li>
                    </ul>

                  </div>
                </div>


               <img src="media/images/PressLogos.png" alt="logos" style={{width: '90%'}} />
            </div>

          </div>
       </div>
     );
}

export default Awards;